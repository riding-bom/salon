import StyledCarousel from "containers/Carousel/Carousel.styled";
import StyledHeader from "containers/Header/Header.styled";
import StyledListContainer from "containers/ListContainer/ListContainer.styled";
import StyledPagination from "containers/Pagination/Pagination.styled";
import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <>
      <Link to="/write">쓰기</Link>
      <StyledHeader />
      <StyledCarousel />
      <StyledListContainer />
      <StyledPagination />
    </>
  );
};

export default Welcome;
