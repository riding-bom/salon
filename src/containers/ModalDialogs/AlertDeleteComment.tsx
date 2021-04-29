import Button from "components/Button/Button";
import Title from "components/Title/Title";
import { combinedState, comment } from "constant/type";
import ModalDialog from "containers/ModalDialog/ModalDialog";
import { deleteComment, getAllComment } from "fb/API";
import { MouseEventHandler, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouteMatch } from "react-router";
import { renderAction } from "redux/reducers/comment";
import { createCloseAction, createOpenAction } from "redux/reducers/openModal";

const AlertDeleteComment = () => {
  const match = useRouteMatch();
  const { postId } = match.params as { postId: string };

  const dispatch = useDispatch();

  const { isOpenAlertDeleteComment } = useSelector((state: combinedState) => state.isOpenModal);
  const commentId = useSelector((state: combinedState) => state.newComment);

  const onClick: MouseEventHandler<HTMLButtonElement> = async e => {
    dispatch(createOpenAction("isOpenSpinner"));
    if (commentId.id) await deleteComment(+commentId.id);
    const commentList = await getAllComment(postId);
    if (commentList) dispatch(renderAction(commentList as comment[]));
    dispatch(createCloseAction("isOpenAlertDeleteComment"));
    dispatch(createCloseAction("isOpenSpinner"));
  };

  return isOpenAlertDeleteComment ? (
    <ModalDialog>
      <Title level={1}>DELETE COMMENT</Title>
      <p>댓글을 정말 삭제하시겠습니까?</p>
      <Button onClick={onClick}>YES</Button>
    </ModalDialog>
  ) : null;
};

export default AlertDeleteComment;
