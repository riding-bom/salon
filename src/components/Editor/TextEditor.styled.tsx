import styled from "styled-components";
import TextEditor from "./TextEditor";

const StyledTextEditor = styled(TextEditor)`
  .editor {
    min-height: 500px;
    font-size: 1.2em;

/* Hide scrollbar for IE, Edge and Firefox */
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
  }

  .editor::-webkit-scrollbar {
    display: none;
}
`;

export default StyledTextEditor;
