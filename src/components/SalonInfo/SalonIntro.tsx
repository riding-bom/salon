import { useSelector } from 'react-redux';

const SalonIntro = () => {
  const { salonIntro } = useSelector((state: any) => state.salonInfo);
  return <span>{salonIntro}</span>;
};

export default SalonIntro;
