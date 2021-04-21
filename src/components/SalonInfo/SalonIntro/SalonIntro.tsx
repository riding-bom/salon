import { combinedState } from "constant/type";
import { getSalonInfo } from "fb/API";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeSalonIntroAction } from "redux/reducers/salonInfo";

type SalonInfoProps = {
  className?: string;
};

const SalonIntro = ({ className }: SalonInfoProps) => {
  const { salonIntro } = useSelector((state: combinedState) => state.salonInfo);

  const dispatch = useDispatch();

  const getSalonInfoIntro = async () => {
    const snapshot = await getSalonInfo();
    const salonInfoData = snapshot.data();
    if (salonInfoData) dispatch(changeSalonIntroAction(salonInfoData.salonIntro));
  };

  useEffect(() => {
    getSalonInfoIntro();
  }, []);

  return <span className={className}>{salonIntro}</span>;
};
export default SalonIntro;
