import styled from "styled-components";
import Button from "./Button";

const StyledCommentButton = styled(Button)`
  padding: 10px 20px 8px 19px;
  border: 1px solid #bbb;
  font-size: 15px;
  border-radius: 42px;
  background-color: #fff;
  color: #666;
  cursor: pointer;
  width: 100px;
  display: flex;
  & > span {
    margin-left: 8px;
  }
`;

export default StyledCommentButton;
