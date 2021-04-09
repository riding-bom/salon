import styled from "styled-components";
import Dialog from "./Dialog";

const StyledDialog = styled(Dialog)`
  box-sizing: border-box;
  width: 400px;
  height: 500px;
  background-color: white;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 20px;

  & button:last-child {
    box-shadow: none;
    position: absolute;
    top: 20px;
    right: 20px;
  }
`;

export default StyledDialog;
