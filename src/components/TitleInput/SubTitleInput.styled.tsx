import styled from "styled-components";
import TitleInput from "./TitleInput";

const StyledSubTitleInput = styled(TitleInput)`
  position: relative;
  width: 80vw;

  & input:focus {
    outline: none;
  }

  & input {
    background-color: transparent;
    box-sizing: border-box;
    width: ${(props) => (props.width ? props.width + "px" : "100%")};
    font-size: 2.4rem;
    border: 0px;
    color: ${(props) => (props.color ? props.color : "black")};
  }

  & label {
    position: absolute;
    left: 0;
    font-size: 2.4rem;
    color: lightgrey;
  }
`;

export default StyledSubTitleInput;
