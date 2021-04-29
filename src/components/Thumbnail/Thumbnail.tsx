type ThumbnailProps = {
  className?: string;
  thumbnail: string;
  alt: string;
};

const Thumbnail = ({ thumbnail, className, alt }: ThumbnailProps) => {
  return <img className={className} src={thumbnail} alt={alt} />;
};

export default Thumbnail;
