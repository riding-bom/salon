import Logo from "components/Logo/Logo";
import Nav from "containers/Nav/Nav";
import useAuthStateObserver from "customHook/useAuthStateObserver";
import { MouseEventHandler } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { signinOpenAction } from "redux/reducers/openModal";
import { signOut } from "fb/firebase";

const NavList = () => {
  const dispatch = useDispatch();

  const currentUser = useAuthStateObserver();
  console.log(currentUser);

  const openSignInModal: MouseEventHandler = () => {
    dispatch(signinOpenAction);
  };
  const onSignOut: MouseEventHandler = () => {
    signOut();
  };

  return currentUser.isAuthed ? (
    <>
      <li>
        <Link to="/write">
          <Logo type="Write" />
        </Link>
      </li>
      <Nav id="welcomPageLogOut" type="LogOut" onClick={onSignOut} />
    </>
  ) : (
    <>
      <li>
        <Link to="/setting">
          <Logo type="Setting" />
        </Link>
      </li>
      <Nav id="welcomPageLogIn" type="LogIn" onClick={openSignInModal} />
    </>
  );
};

export default NavList;
