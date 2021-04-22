import styled from "styled-components";
import Carousel from "./Carousel";

const StyledCarousel = styled(Carousel)`
  width: 700px;
  height: 400px;
  margin: 20px auto;
  display: relative;

  & a {
    text-decoration: none;
  }

  & .carousel-container {
    width: 700px;
    height: 400px;
    background-position: center;
    background-size: cover;
    color: white;
    font-weight: 100;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
  }

  & h1 {
    font-size: 3rem;
    margin: 10px;
  }

  & p {
    font-size: 2rem;
    line-height: 1.6em;
    text-indent: 1em;
    width: 500px;
    height: 6.5em;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
  }

  & .slick-prev {
    left: 10px;
    z-index: 99;
  }

  & .slick-next {
    right: 10px;
  }

  & .slick-dots {
    bottom: 10px;
  }
`;

export default StyledCarousel;
