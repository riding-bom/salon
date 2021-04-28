import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { combinedState } from "constant/type";
import { getSalonInfo } from "fb/API";
import {
  sethostNameAction,
  setSalonIntroAction,
  setThumbnailAction,
} from "redux/reducers/salonInfo";
import StyledHostName from "components/SalonInfo/HostName/HostName.styled";
import StyledSalonInfo from "components/SalonInfo/SalonIntro/SalonInfo.styled";
import StyledThumbnail from "components/SalonInfo/Thumbnail/Thumbnail.styled";
import NavList from "containers/NavList/NavList";

type HeaderProps = {
  className?: string;
};

const Header = ({ className }: HeaderProps) => {
  const salonInfo = useSelector((state: combinedState) => state.salonInfo);
  const dispatch = useDispatch();

  const getHeaderInfo = async () => {
    const snapshot = await getSalonInfo();
    const salonInfoData = snapshot.data();

    if (!salonInfoData) return;
    dispatch(sethostNameAction(salonInfoData.hostName));
    dispatch(setSalonIntroAction(salonInfoData.salonIntro));
    dispatch(setThumbnailAction(salonInfoData.thumbnail));
  };

  useEffect(() => {
    getHeaderInfo();
  }, []);

  return (
    <header className={className}>
      <div>
        <StyledThumbnail
          thumbnail={salonInfo.thumbnail}
          alt="Salon Thumbnail"
        />
        <div>
          <StyledHostName hostName={salonInfo.hostName} />
          <StyledSalonInfo salonIntro={salonInfo.salonIntro} />
        </div>
        <ul>
          <NavList />
        </ul>
      </div>
    </header>
  );
};

export default Header;
