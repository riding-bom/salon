import { useDispatch, useSelector } from "react-redux";
import { MouseEventHandler } from "react";
import { useHistory } from "react-router";
import { combinedState } from "constant/type";
import { resetStateAction } from "redux/reducers/newPost";
import { createCloseAllAction } from "redux/reducers/openModal";
import Title from "components/Title/Title";
import Button from "components/Button/Button";
import ModalDialog from "containers/ModalDialog/ModalDialog";

const AlertCancelWriter = () => {
  const history = useHistory();

  const dispatch = useDispatch();

  const { isOpenAlertCancelWriter } = useSelector(
    (state: combinedState) => state.isOpenModal
  );

  const CancelWriter: MouseEventHandler = () => {
    dispatch(resetStateAction());
    dispatch(createCloseAllAction());
    history.go(-1);
  };

  return isOpenAlertCancelWriter ? (
    <ModalDialog>
      <Title level={1}>WRITE POST</Title>
      <p>포스트를 작성을 정말 취소하시겠습니까?</p>
      <br />
      <p>작성 중인 내용은 저장되지 않습니다.</p>
      <br />
      <Button onClick={CancelWriter}>YES</Button>
    </ModalDialog>
  ) : null;
};

export default AlertCancelWriter;
