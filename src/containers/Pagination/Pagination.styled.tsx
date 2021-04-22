import styled from "styled-components";
import Pagination from "./Pagination";

const StyledPagination = styled(Pagination)`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  padding: 20px;
  font-size: 1.4rem;

  & > li {
    margin: 0 5px;
  }

  & button:hover {
    background-color: transparent;
  }
`;

export default StyledPagination;
