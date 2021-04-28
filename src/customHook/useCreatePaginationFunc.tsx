import { POSTS_PER_PAGE } from "constant/constant";
import { combinedState } from "constant/type";
import { MouseEventHandler } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setCurrentPageAction,
  setRenderingListAction,
} from "redux/reducers/renderingList";

const useCreatePaginationFunc = () => {
  const renderingList = useSelector(
    (state: combinedState) => state.renderingList
  );
  const postsList = useSelector((state: combinedState) => state.postsList);

  const dispatch = useDispatch();

  const renderPage: MouseEventHandler<HTMLButtonElement> = (e) => {
    if (e.currentTarget.textContent) {
      const page = +e.currentTarget.textContent;
      const start = +page * POSTS_PER_PAGE - POSTS_PER_PAGE;
      const end = +page * POSTS_PER_PAGE;
      const sliceList = postsList.slice(start, end);

      dispatch(setRenderingListAction(sliceList));
      dispatch(setCurrentPageAction(+e.currentTarget.textContent));
    }
  };

  const renderPrePage: MouseEventHandler<HTMLButtonElement> = () => {
    if (renderingList.currentPage - 1 <= 0) return;
    const curPage = renderingList.currentPage;
    const start = (curPage - 1) * POSTS_PER_PAGE - POSTS_PER_PAGE;
    const end = (curPage - 1) * POSTS_PER_PAGE;
    const sliceList = postsList.slice(start, end);

    dispatch(setRenderingListAction(sliceList));
    dispatch(setCurrentPageAction(curPage - 1));
  };

  const renderNextPage: MouseEventHandler<HTMLButtonElement> = () => {
    if (
      renderingList.currentPage + 1 >
      (postsList.length % POSTS_PER_PAGE
        ? Math.floor(postsList.length / POSTS_PER_PAGE) + 1
        : postsList.length / POSTS_PER_PAGE)
    )
      return;
    const curPage = renderingList.currentPage;
    const start = (curPage + 1) * POSTS_PER_PAGE - POSTS_PER_PAGE;
    const end = (curPage + 1) * POSTS_PER_PAGE;
    const sliceList = postsList.slice(start, end);

    dispatch(setRenderingListAction(sliceList));
    dispatch(setCurrentPageAction(curPage + 1));
  };

  return [renderPage, renderPrePage, renderNextPage];
};

export default useCreatePaginationFunc;
