import styled from "styled-components";
import Pagination from "./Pagination";

const StyledPagination = styled(Pagination)`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  padding: 20px;
  font-size: 1.4rem;

  & > li {
    box-sizing: border-box;
    width: 20px;
    height: 20px;
    margin: 0 5px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  & a {
    padding: 0 5px;
    text-decoration: none;
    color: black;

    &:visited {
      color: black;
    }
  }

  & .active {
    font-weight: 700;
  }
`;

export default StyledPagination;
