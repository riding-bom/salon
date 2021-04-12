import styled from "styled-components";
import Input from "./Input";

const StyledTitleInput = styled(Input)`
  position: relative;

  & input:focus {
    outline: none;
  }

  & input {
    box-sizing: border-box;
    width: ${(props) => (props.width ? props.width + "px" : "100%")};
    font-size: 1.8rem;
    padding: 1rem;
    border: 0px;
  }

  & label {
    position: absolute;
    font-size: 1.8rem;
    top: 1rem;
    left: 1rem;
    color: lightgrey;
  }
`;

export default StyledTitleInput;
