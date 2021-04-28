import StyledFooter from "containers/Footer/Footer.styled";
import StyledHeader from "containers/Header/Header.styled";
import StyledListContainer from "containers/ListContainer/ListContainer.styled";
import StyledPagination from "containers/Pagination/Pagination.styled";

const Board = () => {
  return (
    <>
      <StyledHeader />
      <StyledListContainer />
      <StyledPagination />
      <StyledFooter />
    </>
  );
};

export default Board;
