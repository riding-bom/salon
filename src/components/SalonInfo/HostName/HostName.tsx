import { useSelector } from 'react-redux';

type HostNameProps = {
  className?: string;
};

const HostName = ({ className }: HostNameProps) => {
  const { hostName } = useSelector((state: any) => state.salonInfo);
  return <h1 className={className}>{hostName} 님의 살롱</h1>;
};
export default HostName;
