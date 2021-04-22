import styled from "styled-components";
import TextArea from "./TextArea";

const StyledTextArea = styled(TextArea)`
  position: relative;
  & > label {
    position: absolute;
    left: 0.5rem;
    top: 1rem;
    color: lightgray;
    font-size: 1.4rem;
  }
`;

export default StyledTextArea;
