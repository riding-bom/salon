import StyledFooter from "containers/Footer/Footer.styled";
import StyledHeader from "containers/Header/Header.styled";
import StyledListContainer from "containers/ListContainer/ListContainer";
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
