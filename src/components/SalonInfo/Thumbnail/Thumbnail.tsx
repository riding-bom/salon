import { useSelector } from 'react-redux';

type ThumbnailProps = {
  className?: string;
};

const Thumbnail = ({ className }: ThumbnailProps) => {
  const { thumbnail } = useSelector((state: any) => state.salonInfo);
  return <img className={className} src={thumbnail} alt='avatar' />;
};

export default Thumbnail;
