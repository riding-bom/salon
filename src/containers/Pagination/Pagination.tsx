import { POSTS_PER_PAGE } from "constant/constant";
import { postsList } from "constant/type";
import { getAllPost } from "fb/API";
import { MouseEventHandler, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, NavLink, useRouteMatch } from "react-router-dom";
import { setAllPost } from "redux/reducers/postsList";
import { setRenderingListAction } from "redux/reducers/renderingList";

type paginationProps = {
  className?: string;
};

const Pagination = ({ className }: paginationProps) => {
  const match = useRouteMatch();
  const { id: currentPage } = match.params as { id: string };

  const [pages, setPages] = useState(0);

  const dispatch = useDispatch();

  const preventDefault: MouseEventHandler = (e) => {
    const target = e.target as Element;

    target.classList.contains("active") && e.preventDefault();
  };

  useEffect(() => {
    const getAllpost = async () => {
      const list = await getAllPost();
      const listNum =
        list.length % POSTS_PER_PAGE
          ? Math.floor(list.length / POSTS_PER_PAGE) + 1
          : list.length / POSTS_PER_PAGE;

      setPages(() => listNum);
      dispatch(setAllPost(list as postsList));

      const start = +currentPage * POSTS_PER_PAGE - POSTS_PER_PAGE;
      const end = +currentPage * POSTS_PER_PAGE;

      dispatch(setRenderingListAction((list as postsList).slice(start, end)));
    };
    getAllpost();
  }, [currentPage]);

  return (
    <ul className={className}>
      {+currentPage > 1 && <Link to={`/board/${+currentPage - 1}`}>{"<"}</Link>}
      {Array.from({ length: pages }, (v, i) => {
        return (
          <li key={i} id={i + ""}>
            <NavLink to={`/board/${i + 1}`} onClick={preventDefault}>
              {i + 1}
            </NavLink>
          </li>
        );
      })}
      {+currentPage < pages && (
        <Link to={`/board/${+currentPage + 1}`}>{">"}</Link>
      )}
    </ul>
  );
};

export default Pagination;
