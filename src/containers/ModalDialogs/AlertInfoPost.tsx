import Title from "components/Title/Title";
import { combinedState } from "constant/type";
import ModalDialog from "containers/ModalDialog/ModalDialog";
import { useSelector } from "react-redux";

const AlertInfoPost = () => {
  const { isOpenAlertInfoPost } = useSelector(
    (state: combinedState) => state.isOpenModal
  );

  return isOpenAlertInfoPost ? (
    <ModalDialog>
      <Title level={1}>SalonInfo POST</Title>
      <p>Host 이름은 필수 입력 사항입니다.</p>
    </ModalDialog>
  ) : null;
};

export default AlertInfoPost;
