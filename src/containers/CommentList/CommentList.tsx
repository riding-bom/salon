import { combinedState, comment } from "constant/type";
import StyledCommentListItem from "containers/CommentListItem/CommentListItem.styled";
import { getAllComment } from "fb/API";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { renderAction } from "redux/reducers/comment";

type CommentListProps = {
  className?: string;
};

const CommentList = ({ className }: CommentListProps) => {
  const comment = useSelector((state: combinedState) => state.comment);

  const dispatch = useDispatch();

  const getCommentInfo = async () => {
    const commentList = await getAllComment();
    if (commentList) dispatch(renderAction(commentList as comment[]));
  };

  useEffect(() => {
    getCommentInfo();
  }, []);

  return (
    <ul className={className}>
      {comment.map((comment: comment, index) => (
        <StyledCommentListItem
          key={index + ""}
          id={index + ""}
          name={comment.comment}
          user={comment.user}
        />
      ))}
    </ul>
  );
};

export default CommentList;
