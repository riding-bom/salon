import { combinedState, comment } from "constant/type";
import StyledCommentListItem from "containers/CommentListItem/CommentListItem.styled";
import useAuthStateObserver from "customHook/useAuthStateObserver";
import { getAllComment } from "fb/API";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { renderAction } from "redux/reducers/comment";

type CommentListProps = {
  className?: string;
};

const CommentList = ({ className }: CommentListProps) => {
  const isAuthed = useAuthStateObserver().isAuthed;
  const comment = useSelector((state: combinedState) => state.comment);
  const dispatch = useDispatch();

  const getCommentInfo = async () => {
    const commentList = await getAllComment();
    if (commentList) dispatch(renderAction(commentList as comment[]));
  };

  useEffect(() => {
    getCommentInfo();
  }, [comment]);

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
