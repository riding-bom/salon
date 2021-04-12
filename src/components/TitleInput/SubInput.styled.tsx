import styled from "styled-components";
import Input from "./Input";

const StyledSubInput = styled(Input)`
  position: relative;
  border-bottom: 1px solid black;

  & input:focus {
    outline: none;
  }

  & input {
    box-sizing: border-box;
    width: ${(props) => (props.width ? props.width + "px" : "100%")};
    font-size: 1rem;
    border: 0px;
  }

  & label {
    position: absolute;
    font-size: 1rem;
    left: 1rem;
    color: lightgrey;
  }
`;

export default StyledSubInput;
