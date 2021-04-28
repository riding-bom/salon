type SalonInfoProps = {
  className?: string;
  salonIntro: string;
};

const SalonIntro = ({ className, salonIntro = "" }: SalonInfoProps) => {
  return <span className={className}>{salonIntro}</span>;
};
export default SalonIntro;
