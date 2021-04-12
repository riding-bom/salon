import { signInWithGoogle } from "fb/firebase";
import { useDispatch } from "react-redux";

const useSignInWithGoogle = async () => {
  const dispatch = useDispatch();

  const res = await signInWithGoogle();
  console.log(res.user?.uid);
  console.log(res.user?.displayName);
  console.log(res.user?.email);
  console.log(res.user?.photoURL);

  const user = res.user;
  const dispatchUser = () => {
    dispatch(user);
  };

  return dispatchUser;
};

export default useSignInWithGoogle;
