import StyledCommentMenuButton from "components/Button/CommentMenuButton.styled";
import List from "components/List/List";
import Logo from "components/Logo/Logo";

type CommentListItemProps = {
  id: string;
  name?: string;
  className?: string;
  user: string;
};

const CommentListItem = ({ id, name, className, user }: CommentListItemProps) => {
  return (
    <List id={id} className={className}>
      <div>
        <Logo type="UserImg" />
        <span>{user}</span>
      </div>
      {name}
      <StyledCommentMenuButton type="button" className={className}>
        <Logo type="Menu" />
      </StyledCommentMenuButton>
    </List>
  );
};

export default CommentListItem;
