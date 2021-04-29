import { combinedState, comment } from "constant/type";
import StyledCommentListItem from "containers/CommentListItem/CommentListItem.styled";
import useAuthStateObserver from "customHook/useAuthStateObserver";
import { getAllComment } from "fb/API";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouteMatch } from "react-router";
import { renderAction } from "redux/reducers/comment";

type CommentListProps = {
  className?: string;
};

const CommentList = ({ className }: CommentListProps) => {
  const match = useRouteMatch();
  const { postId } = match.params as { postId: string };

  const isAuthed = useAuthStateObserver().isAuthed;
  const comment = useSelector((state: combinedState) => state.comment);
  const dispatch = useDispatch();

  const getCommentInfo = async () => {
    const commentList = await getAllComment(postId);
    if (commentList) dispatch(renderAction(commentList as comment[]));
  };

  useEffect(() => {
    console.log(comment.length);
    getCommentInfo();
  }, []);

  if (isAuthed) {
    return (
      <ul className={className}>
        {comment.map((comment: comment) => (
          <StyledCommentListItem
            key={comment.id}
            id={comment.id}
            name={comment.comment}
            user={comment.user}
            // date={comment.date}
          />
        ))}
      </ul>
    );
  } else {
    return null;
  }
};

export default CommentList;
