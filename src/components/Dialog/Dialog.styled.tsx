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
  padding: 50px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;

  & * {
    margin: 10px 0;
    font-size: 1.2rem;
  }

  & > h1 {
    font-size: 2rem;
  }

  & > button {
    width: 100%;
    height: 25px;
  }

  & button:last-child {
    box-shadow: none;
    position: absolute;
    top: 20px;
    right: 20px;
    width: 20px;
    height: 20px;
  }
`;

export default StyledDialog;
