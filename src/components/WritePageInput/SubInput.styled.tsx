import styled from "styled-components";
import Input from "./Input";

const StyledSubInput = styled(Input)`
  position: relative;
  margin: 0 2rem;
  border-bottom: 1px solid black;

  & input:focus {
    outline: none;
  }

  & input {
    background-color: transparent;
    box-sizing: border-box;
    width: ${(props) => (props.width ? props.width + "px" : "100%")};
    font-size: 1.4rem;
    border: 0px;
  }

  & label {
    position: absolute;
    left: 1rem;
    font-size: 1.4rem;
    color: lightgrey;
  }
`;

export default StyledSubInput;
