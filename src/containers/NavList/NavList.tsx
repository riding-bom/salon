import Nav from "containers/Nav/Nav";
import useAuthStateObserver from "customHook/useAuthStateObserver";

const NavList = () => {
  const currentUser = useAuthStateObserver();
  console.log(currentUser);
  console.log(currentUser.isAuthed);

  return (
    <>
      <Nav id="1" type="LightMode" />
      <Nav id="2" type="DarkMode" />
      {currentUser.isAuthed ? <Nav id="3" type="LogOut" /> : null}
      {currentUser.isAuthed ? <Nav id="4" type="Write" /> : null}
      <Nav id="5" type="Search" />
      <Nav id="6" type="Setting" />
    </>
  );
};

export default NavList;
