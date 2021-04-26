import StyledButton from "components/Button/Button.styled";
import Title from "components/Title/Title";
import { combinedState } from "constant/type";
import ModalDialog from "containers/ModalDialog/ModalDialog";
import useAuthStateObserver from "customHook/useAuthStateObserver";
import { removeLikePost, removeUserInPostDB } from "fb/API";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router";
import { createCloseAllAction } from "redux/reducers/openModal";

const AlertCancelLike = () => {
  const location = useLocation();
  const postId = location.pathname.match(/[0-9]+/)?.toString();
  const history = useHistory();

  const openModal = useSelector((state: combinedState) => state.isOpenModal);
  const dispatch = useDispatch();

  const currentUser = useAuthStateObserver();

  return openModal.isOpenAlertCancelLike ? (
    <ModalDialog>
      <Title level={1}>좋아요 취소</Title>
      <p>좋아요를 취소하시겠습니까?</p>
      <StyledButton
        onClick={async () => {
          if (currentUser.userInfo?.uid && postId) {
            await removeLikePost(currentUser.userInfo?.uid, postId);
            await removeUserInPostDB(currentUser.userInfo?.uid, postId);
          }
          dispatch(createCloseAllAction());
          history.replace(`/${postId}`);
        }}
      >
        YES
      </StyledButton>
    </ModalDialog>
  ) : null;
};

export default AlertCancelLike;
