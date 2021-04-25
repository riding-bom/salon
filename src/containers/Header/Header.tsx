import { useSelector } from "react-redux";
import { combinedState } from "constant/type";
import StyledHostName from "components/SalonInfo/HostName/HostName.styled";
import StyledSalonInfo from "components/SalonInfo/SalonIntro/SalonInfo.styled";
import StyledThumbnail from "components/SalonInfo/Thumbnail/Thumbnail.styled";
import NavList from "containers/NavList/NavList";

type HeaderProps = {
  className?: string;
};

const Header = ({ className }: HeaderProps) => {
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
          <NavList />
        </ul>
      </div>
    </header>
  );
};

export default Header;
