import Comment from "containers/Comment/Comment";
import StyledHeader from "containers/Header/Header.styled";
import StyledListContainer from "containers/ListContainer/ListContainer.styled";

const Welcome = () => {
  return (
    <>
      <StyledHeader />;
      <StyledListContainer />
      <Comment />
    </>
  );
};

export default Welcome;
