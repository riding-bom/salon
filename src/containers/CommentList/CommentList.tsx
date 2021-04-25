import { comment } from "constant/type";
import StyledCommentListItem from "containers/CommentListItem/CommentListItem.styled";
import { useSelector } from "react-redux";

type CommentListProps = {
  className?: string;
};

const CommentList = ({ className }: CommentListProps) => {
  const comment = useSelector((state: any) => state.comment);

  return (
    <ul className={className}>
      {comment.map((comment: comment) => (
        <StyledCommentListItem
          key={comment.id}
          id={comment.id}
          name={comment.comment}
          user={comment.user}
        />
      ))}
    </ul>
  );
};

export default CommentList;
