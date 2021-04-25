import Button from "components/Button/Button";
import Title from "components/Title/Title";
import { combinedState } from "constant/type";
import ModalDialog from "containers/ModalDialog/ModalDialog";
import { useDispatch, useSelector } from "react-redux";
import { deletePost as deletePostAsync } from "fb/API";
import { MouseEventHandler } from "react";
import { useHistory, useLocation } from "react-router";
import { createCloseAction } from "redux/reducers/openModal";

const AlertDeletePost = () => {
  const history = useHistory();
  const location = useLocation();
  const postId = location.pathname.match(/[0-9]+/)?.toString();

  const dispatch = useDispatch();

  const { isOpenAlertDeletePost } = useSelector(
    (state: combinedState) => state.isOpenModal
  );

  const deletePost: MouseEventHandler = async () => {
    postId && (await deletePostAsync(+postId));
    dispatch(createCloseAction("isOpenAlertDeletePost"));
    history.replace("/");
  };

  return isOpenAlertDeletePost ? (
    <ModalDialog>
      <Title level={1}>DELETE POST</Title>
      <p>포스트를 정말 삭제하시겠습니까?</p>
      <Button onClick={deletePost}>YES</Button>
    </ModalDialog>
  ) : null;
};

export default AlertDeletePost;
