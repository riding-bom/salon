import { useEffect } from "react";
import { useRouteMatch } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { combinedState } from "constant/type";
import { getAllPostAsync } from "redux/reducers/postsList";
import StyledPost from "components/Post/Post.styled";
import { POSTS_PER_PAGE } from "constant/constant";
import { createCloseAction, createOpenAction } from "redux/reducers/openModal";

type listContainerProps = {
  className?: string;
};

const ListContainer = ({ className }: listContainerProps) => {
  const match = useRouteMatch();

  const renderingList = useSelector(
    (state: combinedState) => state.renderingList
  ).renderingList;
  const postsList = useSelector((state: combinedState) => state.postsList);

  const currentList =
    match.path === "/" ? postsList.slice(0, POSTS_PER_PAGE) : renderingList;

  const dispatch = useDispatch();

  useEffect(() => {
    const setList = async () => {
      dispatch(createOpenAction("isOpenSpinner"));
      await dispatch(getAllPostAsync());
      dispatch(createCloseAction("isOpenSpinner"));
    };
    setList();
  }, []);

  const convertToDate = (timestamp: Date) => {
    const convertedDate = timestamp
      .toString()
      .slice(18)
      .match(/[0-9]+/)
      ?.toString();

    return (
      convertedDate &&
      new Date(+convertedDate * 1000).toISOString().slice(0, 10)
    );
  };

  return (
    <ul className={className}>
      {currentList.map((post) => (
        <StyledPost
          id={post.id}
          key={post.id}
          access={post.access}
          thumbnail={post.backgroundImage}
          title={post.title}
          subTitle={post.subTitle}
          summary={post.content}
          date={`${convertToDate(post.date)}`}
          likeCount={post.likeUser ? post.likeUser.length : [].length}
          commentCount={post.commentUser ? post.commentUser.length : [].length}
        />
      ))}
    </ul>
  );
};

const StyledListContainer = styled(ListContainer)`
  background-color: inherit;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
`;

export default StyledListContainer;
