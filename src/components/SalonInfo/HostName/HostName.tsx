import Title from "components/Title/Title";
import { combinedState } from "constant/type";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeNameAction } from "redux/reducers/salonInfo";
import { getSalonInfo } from "../../../fb/API";

type HostNameProps = {
  className?: string;
};

const HostName = ({ className }: HostNameProps) => {
  const { hostName } = useSelector((state: combinedState) => state.salonInfo);

  const dispatch = useDispatch();

  const getSalonInfoHostName = async () => {
    const snapshot = await getSalonInfo();
    const salonInfoData = snapshot.data();
    if (salonInfoData) dispatch(changeNameAction(salonInfoData.hostName));
  };

  useEffect(() => {
    getSalonInfoHostName();
  }, []);

  return (
    <Title level={1} className={className}>
      {hostName} 님의 살롱
    </Title>
  );
};
export default HostName;
