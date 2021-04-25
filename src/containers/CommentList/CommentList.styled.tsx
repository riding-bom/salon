import styled from "styled-components";
import CommentList from "./CommentList";

const StyledCommentList = styled(CommentList)`
  & > li {
    margin-top: 2.2rem;
    height: 11rem;
    font-size: 1.4rem;
    border-bottom: 1px solid lightgray;
  }
`;

export default StyledCommentList;
