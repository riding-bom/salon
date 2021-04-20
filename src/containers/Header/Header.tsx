import StyledHostName from "components/SalonInfo/HostName/HostName.styled";
import StyledSalonInfo from "components/SalonInfo/SalonIntro/SalonInfo.styled";
import StyledThumbnail from "components/SalonInfo/Thumbnail/Thumbnail.styled";
import InputSalonInfo from "containers/InputSalonInfo/InputSalonInfo";
import Nav from "containers/Nav/Nav";

type HeaderProps = {
  className?: string;
};

const Header = ({ className }: HeaderProps) => {
  return (
    <header className={className}>
      <div>
        <StyledThumbnail />
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
        </div>
      </div>
    </header>
  );
};

export default Header;
