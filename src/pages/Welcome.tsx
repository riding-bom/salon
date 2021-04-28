import MoreReadButton from "components/Button/MoreReadButton.styled";
import StyledCarousel from "containers/Carousel/Carousel.styled";
import StyledFooter from "containers/Footer/Footer.styled";
import StyledHeader from "containers/Header/Header.styled";
import StyledListContainer from "containers/ListContainer/ListContainer";
import { useHistory } from "react-router";

const Welcome = () => {
  const history = useHistory();

  return (
    <>
      <StyledCarousel />
      <StyledListContainer />
      <MoreReadButton
        onClick={() => {
          history.push("/board/1");
        }}
      >
        더 보기
      </MoreReadButton>
    </>
  );
};

export default Welcome;
