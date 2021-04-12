import { useSelector } from 'react-redux';

type SalonInfoProps = {
  className?: string;
};

const SalonIntro = ({ className }: SalonInfoProps) => {
  const { salonIntro } = useSelector((state: any) => state.salonInfo);
  return <span className={className}>{salonIntro}</span>;
};
export default SalonIntro;
