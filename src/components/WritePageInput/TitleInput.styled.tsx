import styled from "styled-components";
import Input from "./Input";

const StyledTitleInput = styled(Input)`
  position: relative;
  margin: 0 2rem;

  & input:focus {
    outline: none;
  }

  & input {
    padding: 1rem;
    background-color: transparent;
    box-sizing: border-box;
    width: ${(props) => (props.width ? props.width + "px" : "100%")};
    font-size: 1.8rem;
    font-weight: 600;
    border: 0px;
  }

  & label {
    position: absolute;
    top: 1rem;
    left: 1rem;
    font-size: 1.8rem;
    color: lightgrey;
  }
`;

export default StyledTitleInput;
