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
  font-size: 1.4rem;

  & > h1 {
    font-size: 2.4rem;
    margin: 20px 0;
  }

  & > form {
    margin: 0;
    margin-top: 20px;
    margin-bottom: 5px;
  }

  & > button {
    width: 100%;
    height: 25px;
    margin: 10px 0;
  }

  & .close-button {
    box-shadow: none;
    position: absolute;
    top: 20px;
    right: 20px;
    width: 20px;
    height: 20px;
    padding: 0;
    margin: 0;

    & > svg {
      margin: 0;
    }
  }
`;

export default StyledDialog;
