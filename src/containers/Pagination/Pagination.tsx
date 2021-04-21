import StyledButton from "components/Button/Button.styled";
import { POSTS_PER_PAGE } from "constant/constant";
import { combinedState, postsList } from "constant/type";
import { getAllPost } from "fb/API";
import { MouseEventHandler, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAllPost } from "redux/reducers/postsList";
import { setRenderingListAction } from "redux/reducers/renderingList";

type paginationProps = {
  className?: string;
};

const Pagination = ({ className }: paginationProps) => {
  const [pages, setPages] = useState(0);

  const postsList = useSelector((state: combinedState) => state.postsList);
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
      dispatch(setRenderingListAction(list.slice(0, 5)));
    };
    getAllpost();
  }, []);

  const renderPage: MouseEventHandler<HTMLButtonElement> = (e) => {
    if (e.currentTarget.textContent) {
      const start = +e.currentTarget.textContent * POSTS_PER_PAGE - 5;
      const end = +e.currentTarget.textContent * POSTS_PER_PAGE;
      const sliceList = postsList.slice(start, end);

      dispatch(setRenderingListAction(sliceList));
    }
  };

  return (
    <ul className={className}>
      {Array.from({ length: pages }, (v, i) => {
        return (
          <li key={i} id={i + ""}>
            <StyledButton onClick={renderPage}>{i + 1}</StyledButton>
          </li>
        );
      })}
    </ul>
  );
};

export default Pagination;
