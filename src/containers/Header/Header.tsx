import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { combinedState } from "constant/type";
import { getSalonInfo } from "fb/API";
import {
  sethostNameAction,
  setSalonIntroAction,
  setThumbnailAction,
} from "redux/reducers/salonInfo";
import Title from "components/Title/Title";
import NavList from "containers/NavList/NavList";
import Thumbnail from "components/Thumbnail/Thumbnail";

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
        <Thumbnail
          className="header__thumbnail"
          thumbnail={salonInfo.thumbnail}
          alt="Salon Thumbnail"
        />
        <div>
          <Title
            level={1}
            className="header__hostname"
            children={`${salonInfo.hostName}님의 살롱`}
          />
          <span className="header__salonIntro">{salonInfo.salonIntro}</span>
        </div>
        <ul>
          <NavList />
        </ul>
      </div>
    </header>
  );
};

export default Header;
