import InputText from "components/InputText/InputText";
import styled from "styled-components";

const StyledInputText = styled(InputText)`
  position: relative;
  width: 100%;

  & > input {
    box-sizing: border-box;
    width: 100%;
    height: 25px;
    margin: 0;
    border: none;
    border-bottom: 1px solid black;
  }

  & > label {
    position: absolute;
    top: 3px;
    left: 5px;
    color: gray;
    padding: 0;
    margin: 0;
  }
`;

export default StyledInputText;
