import styled from "styled-components";
import CommentListItem from "./CommentListItem";

const StyledCommentListItem = styled(CommentListItem)`
  position: relative;
  div {
    display: flex;
    align-items: center;
  }
  span {
    margin: 1rem;
    display: inline-block;
    line-height: 2rem;
  }
  button {
    position: absolute;
    top: 0;
    right: 0;
  }
`;

export default StyledCommentListItem;
