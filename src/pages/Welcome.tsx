import StyledCarousel from "containers/Carousel/Carousel.styled";
import StyledHeader from "containers/Header/Header.styled";
import StyledListContainer from "containers/ListContainer/ListContainer.styled";
import StyledPagination from "containers/Pagination/Pagination.styled";

const Welcome = () => {
  return (
    <>
      <StyledHeader />
      <StyledCarousel />
      <StyledListContainer />
      <StyledPagination />
    </>
  );
};

export default Welcome;
