import Logo from "components/Logo/Logo";
import Nav from "containers/Nav/Nav";
import useAuthStateObserver from "customHook/useAuthStateObserver";
import { MouseEventHandler } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { createOpenAction } from "redux/reducers/openModal";
import { signOut } from "fb/firebase";

const NavList = () => {
  const dispatch = useDispatch();

  const currentUser = useAuthStateObserver();

  const openSignInModal: MouseEventHandler = () => {
    dispatch(createOpenAction("isOpenSignIn"));
  };
  const onSignOut: MouseEventHandler = () => {
    signOut();
  };

  return currentUser.isAuthed ? (
    <>
      <li>
        <span>{currentUser.userInfo?.displayName} 님</span>
      </li>
      <li>
        <Link to="/">
          <Logo type="Home" />
        </Link>
      </li>
      <li>
        <Link to="/write">
          <Logo type="Write" />
        </Link>
      </li>
      <li>
        <Link to="/like-posts">
          <Logo type="FillHeart" />
        </Link>
      </li>
      <li>
        <Link to="/setting">
          <Logo type="Setting" />
        </Link>
      </li>

      <Nav id="welcomPageLogOut" type="LogOut" onClick={onSignOut} />
    </>
  ) : (
    <>
      <li>
        <Link to="/">
          <Logo type="Home" />
        </Link>
      </li>

      <Nav id="welcomPageLogIn" type="LogIn" onClick={openSignInModal} />
    </>
  );
};

export default NavList;
