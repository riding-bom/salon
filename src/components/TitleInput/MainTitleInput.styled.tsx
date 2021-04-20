import styled from "styled-components";
import TitleInput from "./TitleInput";

const StyledMainTitleInput = styled(TitleInput)`
  position: relative;
  width: 80vw;

  & input:focus {
    outline: none;
  }

  & input {
    background-color: transparent;
    box-sizing: border-box;
    width: ${(props) => (props.width ? props.width + "px" : "100%")};
    font-size: 3.8rem;
    font-weight: 500;
    border: 0px;
    color: ${(props) => props.color ? props.color : "black"}
  }

  & label {
    position: absolute;
    top: 1rem;
    left: 0;
    font-size: 3.8rem;
    color: lightgrey;
  }
`;

export default StyledMainTitleInput;
