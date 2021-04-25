import StyledButton from "components/Button/Button.styled";
import Title from "components/Title/Title";
import { combinedState } from "constant/type";
import ModalDialog from "containers/ModalDialog/ModalDialog";
import { useDispatch, useSelector } from "react-redux";
import {
  createCloseAllAction,
  createOpenAction,
} from "redux/reducers/openModal";

const NeedSignIn = () => {
  const openModal = useSelector((state: combinedState) => state.isOpenModal);
  const dispatch = useDispatch();

  return openModal.isOpenNeedSignIn ? (
    <ModalDialog>
      <Title level={1}>로그인이 필요합니다</Title>
      <p>로그인 하시겠습니까?</p>
      <StyledButton
        onClick={() => {
          dispatch(createCloseAllAction());
          dispatch(createOpenAction("isOpenSignIn"));
        }}
      >
        YES
      </StyledButton>
    </ModalDialog>
  ) : null;
};

export default NeedSignIn;
