import styled from "styled-components";
import TextArea from "./TextArea";

const StyledTextArea = styled(TextArea)`
  position: relative;
  border-top: 1px solid lightgray;

  .textAreaContainer {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    label {
      position: absolute;
      top: 2.7rem;
      left: 0.5rem;
      color: lightgray;
      font-size: 1.4rem;
    }
    textarea {
      border: 1px solid lightgray;
      resize: none;
      margin-top: 22px;
    }
  }
`;

export default StyledTextArea;
