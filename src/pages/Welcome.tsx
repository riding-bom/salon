import StyledHeader from "containers/Header/Header.styled";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllPost } from "redux/reducers/postsList";


const Welcome = () => {
  const state = useSelector((state: any)  => state.postsList);
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getAllPost())
  }, [dispatch])
  console.log(state);

  return (
  <StyledHeader />
  )
};

export default Welcome;
