import { useSelector } from "react-redux";
import { combinedState } from "constant/type";
import StyledHostName from "components/SalonInfo/HostName/HostName.styled";
import Nav from "containers/Nav/Nav";
import StyledSalonInfo from "components/SalonInfo/SalonIntro/SalonInfo.styled";
import StyledThumbnail from "components/SalonInfo/Thumbnail/Thumbnail.styled";
import InputSalonInfo from "containers/InputSalonInfo/InputSalonInfo";
import useAuthStateObserver from "customHook/useAuthStateObserver";
import LoginTestButton from "components/LoginTestButton/LoginTestButton";

type HeaderProps = {
  className?: string;
};

const Header = ({ className }: HeaderProps) => {
  const currentUser = useAuthStateObserver();
  console.log(currentUser);
  console.log(currentUser.isAuthed);

  const { thumbnail } = useSelector((state: combinedState) => state.salonInfo);

  return (
    <header className={className}>
      <div>
        <StyledThumbnail thumbnail={thumbnail} alt="Salon Thumbnail" />
        <div>
          <StyledHostName />
          <StyledSalonInfo />
        </div>
        <ul>
          <Nav id="1" type="LightMode" />
          <Nav id="2" type="DarkMode" />
          <Nav id="3" type="LogOut" />
          <Nav id="4" type="Search" />
          <Nav id="5" type="Setting" />
        </ul>
        <div>
          <InputSalonInfo />
          <LoginTestButton />
        </div>
      </div>
    </header>
  );
};

export default Header;
