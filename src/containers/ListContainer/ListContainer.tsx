import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { combinedState } from "constant/type";
import { getAllPostAsync } from "redux/reducers/postsList";
import StyledPost from "components/Post/Post.styled";

type listContainerProps = {
  className?: string;
};

const ListContainer = ({ className }: listContainerProps) => {
  const renderingList = useSelector((state: combinedState) => state.renderingList);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllPostAsync());
    console.log(renderingList);
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
      {renderingList.renderingList.map(post => (
        <Link to={`/${post.id}`} key={post.id}>
          <StyledPost
            access={post.access}
            thumbnail={post.backgroundImage}
            title={post.title}
            subTitle={post.subTitle}
            summary={post.content}
            date={`${convertToDate(post.date)}`}
            likeCount={0}
            commentCount={0}
          />
        </Link>
      ))}
    </ul>
  );
};

export default ListContainer;
