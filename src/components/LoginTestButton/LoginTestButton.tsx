import { combinedState, user } from "constant/type";
import { signOut, auth } from "fb/firebase";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  REMOVE_CURRENT_USER,
  updateUserAction,
} from "redux/reducers/currentUser";
import { signinOpenAction } from "redux/reducers/openModal";

const LoginTestButton = () => {
  const currentUser = useSelector((state: combinedState) => state.currentUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        dispatch(updateUserAction(user));
        console.log("login", user);
      } else {
        console.log("logOut");
        dispatch({ type: REMOVE_CURRENT_USER });
      }
    });

    return () => {
      unsubscribe();
      console.log("unsuscribe");
    };
  }, [dispatch]);

  return currentUser.isAuthed ? (
    <>
      <button onClick={signOut}>로그아웃</button>
      <div>
        이름: {currentUser.userInfo && currentUser.userInfo.displayName}
      </div>
      <div>이메일: {currentUser.userInfo && currentUser.userInfo.email}</div>
    </>
  ) : (
    <button onClick={() => dispatch(signinOpenAction)}>로그인</button>
  );
};

export default LoginTestButton;
