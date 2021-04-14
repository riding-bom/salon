import styled from "styled-components";
import PasswordInput from "./PasswordInput";

const StyledPasswordInput = styled(PasswordInput)`
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;
  margin-top: 20px;

  & > button {
    box-shadow: none;
    width: 20px;
    height: 20px;
    padding: 0;

    &:hover {
      background-color: #fff;
    }
  }
`;

export default StyledPasswordInput;
