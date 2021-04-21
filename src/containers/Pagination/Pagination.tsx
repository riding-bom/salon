import StyledButton from "components/Button/Button.styled";
import { POSTS_PER_PAGE } from "constant/constant";
import { combinedState, postsList } from "constant/type";
import useCreatePaginationFunc from "customHook/useCreatePaginationFunc";
import { getAllPost } from "fb/API";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAllPost } from "redux/reducers/postsList";
import { setRenderingListAction } from "redux/reducers/renderingList";

type paginationProps = {
  className?: string;
};

const Pagination = ({ className }: paginationProps) => {
  const [pages, setPages] = useState(0);

  const renderingList = useSelector(
    (state: combinedState) => state.renderingList
  );

  const dispatch = useDispatch();

  useEffect(() => {
    const getAllpost = async () => {
      const list = await getAllPost();
      const listNum =
        list.length % POSTS_PER_PAGE
          ? Math.floor(list.length / POSTS_PER_PAGE) + 1
          : list.length / POSTS_PER_PAGE;

      setPages(() => listNum);
      dispatch(setAllPost(list as postsList));
      dispatch(setRenderingListAction((list as postsList).slice(0, 5)));
    };
    getAllpost();
  }, []);

  const [renderPage, renderPrePage, renderNextPage] = useCreatePaginationFunc();

  return (
    <ul className={className}>
      <StyledButton onClick={renderPrePage}>{"<"}</StyledButton>
      {Array.from({ length: pages }, (v, i) => {
        return (
          <li key={i} id={i + ""}>
            <StyledButton
              onClick={renderPage}
              disabled={i + 1 === renderingList.currentPage}
            >
              {i + 1}
            </StyledButton>
          </li>
        );
      })}
      <StyledButton onClick={renderNextPage}>{">"}</StyledButton>
    </ul>
  );
};

export default Pagination;
