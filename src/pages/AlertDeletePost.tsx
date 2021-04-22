import Button from "components/Button/Button";
import Title from "components/Title/Title";
import { combinedState } from "constant/type";
import ModalDialog from "containers/ModalDialog/ModalDialog";
import { useDispatch, useSelector } from "react-redux";
import { deletePost as deletePostAsync } from "fb/API";
import { MouseEventHandler } from "react";
import { useHistory, useRouteMatch } from "react-router";
import { alertDeletePostCloseAction } from "redux/reducers/openModal";

const AlertDeletePost = () => {
  const history = useHistory();
  const match = useRouteMatch();
  const { postId } = match.params as { postId: string };
  console.log(postId);

  const dispatch = useDispatch();

  const { isOpenAlertDeletePost } = useSelector(
    (state: combinedState) => state.isOpenModal
  );

  const deletePost: MouseEventHandler = async () => {
    await deletePostAsync(+postId);
    dispatch(alertDeletePostCloseAction);
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
