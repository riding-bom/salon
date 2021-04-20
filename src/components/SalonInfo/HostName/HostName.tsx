import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getSalonInfo } from '../../../fb/API';

type HostNameProps = {
  className?: string;
};

const HostName = ({ className }: HostNameProps) => {
  const { hostName } = useSelector((state: any) => state.salonInfo);

  const getSalonInfoHostName = async () => {
    const res = await getSalonInfo();
    console.log(res.data());
  };
  useEffect(() => {
    getSalonInfoHostName();
  });

  return <h1 className={className}>{hostName} 님의 살롱</h1>;
};
export default HostName;
