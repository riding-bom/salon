import styled from "styled-components";
import TextEditor from "./TextEditor";

const StyledTextEditor = styled(TextEditor)`
  width: 960px;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  margin-bottom: 100px;

  .editor {
    min-height: 500px;
    font-size: 1.4em;
    /* Hide scrollbar for IE, Edge and Firefox */
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
  }

  .editor::-webkit-scrollbar {
    display: none;
  }
`;

export default StyledTextEditor;
