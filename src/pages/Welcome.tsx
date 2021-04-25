import StyledCarousel from "containers/Carousel/Carousel.styled";
import StyledFooter from "containers/Footer/Footer.styled";
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
      <StyledFooter />
    </>
  );
};

export default Welcome;
