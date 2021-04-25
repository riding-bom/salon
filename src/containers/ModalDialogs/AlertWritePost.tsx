import Title from "components/Title/Title";
import { combinedState } from "constant/type";
import ModalDialog from "containers/ModalDialog/ModalDialog";
import { useSelector } from "react-redux";

const AlertWritePost = () => {
  const { isOpenAlertWritePost } = useSelector(
    (state: combinedState) => state.isOpenModal
  );

  return isOpenAlertWritePost ? (
    <ModalDialog>
      <Title level={1}>Write POST</Title>
      <p>제목과 내용은 필수 입력 사항입니다.</p>
    </ModalDialog>
  ) : null;
};

export default AlertWritePost;
