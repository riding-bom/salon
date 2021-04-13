import { combinedState } from "constant/type";
import { getUser } from "fb/API";
import { auth } from "fb/firebase";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeUserAction, updateUserAction } from "redux/reducers/currentUser";

const useAuthStateObserver = () => {
  const currentUser = useSelector((state: combinedState) => state.currentUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        const userInfo = await getUser(user.uid);
        dispatch(updateUserAction(userInfo));
      } else {
        dispatch(removeUserAction());
      }
    });

    return () => {
      unsubscribe();
    };
  }, [dispatch]);

  return currentUser;
};

export default useAuthStateObserver;
