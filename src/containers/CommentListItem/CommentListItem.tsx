import StyledCommentMenuButton from "components/Button/CommentMenuButton.styled";
import List from "components/List/List";
import Logo from "components/Logo/Logo";
import { deleteComment } from "fb/API";
import { MouseEventHandler } from "react";

type CommentListItemProps = {
  id: string;
  name?: string;
  className?: string;
  user: string;
  date?: Date;
};

const CommentListItem = ({ id, name, className, user, date }: CommentListItemProps) => {
  const onClick: MouseEventHandler<HTMLButtonElement> = e => {
    const currentCommentId = e.currentTarget.parentElement?.parentElement?.id;
    if (currentCommentId) deleteComment(+currentCommentId);
  };

  return (
    <List id={id} className={className}>
      <div>
        <Logo type="UserImg" />
        <span>{user}</span>
        <span>{date}</span>
      </div>
      {name}
      <div>
        <StyledCommentMenuButton type="button" className={className} onClick={onClick}>
          <Logo type="Write" />
          <Logo type="Delete" />
          <Logo type="Menu" />
        </StyledCommentMenuButton>
      </div>
    </List>
  );
};

export default CommentListItem;
