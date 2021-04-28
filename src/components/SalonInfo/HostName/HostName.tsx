import Title from "components/Title/Title";

type HostNameProps = {
  className?: string;
  hostName?: string;
};

const HostName = ({ className, hostName = "" }: HostNameProps) => {
  return (
    <Title level={1} className={className} children={`${hostName}님의 살롱`} />
  );
};
export default HostName;
