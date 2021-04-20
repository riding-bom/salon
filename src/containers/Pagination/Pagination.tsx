import StyledButton from "components/Button/Button.styled";
import { combinedState, postsList } from "constant/type";
import { getAllPost } from "fb/API";
import {
  ChangeEventHandler,
  MouseEventHandler,
  useEffect,
  useState,
} from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPostAsync } from "redux/reducers/postsList";
import { setRenderingListAction } from "redux/reducers/renderingList";

const Pagination = () => {
  const [pages, setPages] = useState(0);
  const [seperatedList, setSeperatedList] = useState([] as postsList[]);

  const renderList = useSelector((state: combinedState) => state.renderList);
  const dispatch = useDispatch();

  let emptyList: any[] = [];

  useEffect(() => {
    const getAllpost = async () => {
      const list = await getAllPost();
      const listNum =
        list.length % 10 ? Math.floor(list.length / 10) + 1 : list.length / 10;

      setPages(() => listNum);

      emptyList = [...Array.from({ length: listNum }, () => [])];

      list
        .sort((a, b) => a.id - b.id)
        .forEach((post, index) => {
          emptyList[Math.floor(index / 10)].push(post);
        });

      console.log(emptyList);
      // setSeperatedList(() => emptyList);
    };
    getAllpost();
  }, []);

  useEffect(() => {
    console.log(renderList);
  }, [renderList]);

  const renderPage: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.currentTarget.textContent &&
      // console.log(+e.currentTarget.textContent - 1);
      // console.log(emptyList[+e.currentTarget.textContent - 1]);
      dispatch(
        setRenderingListAction(emptyList[+e.currentTarget.textContent - 1])
      );
  };

  return (
    <ul>
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
