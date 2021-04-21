import styled from "styled-components";
import ListContainer from "./ListContainer";

const StyledListContainer = styled(ListContainer)`
  background-color: inherit;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;

  & > a {
    text-decoration: none;
  }
`;

export default StyledListContainer;
