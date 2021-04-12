import useAuthStateObserver from "customHook/useAuthStateObserver";
import { signOut } from "fb/firebase";
import { useDispatch } from "react-redux";
import { signinOpenAction } from "redux/reducers/openModal";

const LoginTestButton = () => {
  const dispatch = useDispatch();

  const currentUser = useAuthStateObserver();

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
