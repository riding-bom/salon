import { combinedState } from "constant/type";
import { useSelector } from "react-redux";

type SalonInfoProps = {
  className?: string;
};

const SalonIntro = ({ className }: SalonInfoProps) => {
  const { salonIntro } = useSelector((state: combinedState) => state.salonInfo);
  return <span className={className}>{salonIntro}</span>;
};
export default SalonIntro;
