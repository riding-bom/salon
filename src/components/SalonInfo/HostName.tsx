import { useSelector } from 'react-redux';

const HostName = () => {
  const { hostName } = useSelector((state: any) => state.salonInfo);
  return <h1>{hostName}</h1>;
};
export default HostName;
