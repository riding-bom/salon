import styled from "styled-components";
import TextEditor from "./TextEditor";

const StyledTextEditor = styled(TextEditor)`
  width: 960px;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;

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

  .btn-group {
    position: fixed;
    bottom: 15px;

    & > button {
      border-radius: 15px;
      border: 1px solid #ccc;
      margin: 0 10px;
    }
  }
`;

export default StyledTextEditor;
