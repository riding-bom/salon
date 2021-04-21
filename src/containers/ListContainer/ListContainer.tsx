import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { combinedState } from "constant/type";
import { getAllPostAsync } from "redux/reducers/postsList";
import StyledPost from "components/Post/Post.styled";

import firebase from "firebase/app";
import "firebase/firestore";

type listContainerProps = {
  className?: string;
};

const ListContainer = ({ className }: listContainerProps) => {
  const renderingList = useSelector(
    (state: combinedState) => state.renderingList
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllPostAsync());
    console.log(renderingList);
  }, []);

  return (
    <ul className={className}>
      {renderingList.renderingList.map((post) => (
        <Link to={`/${post.id}`} key={post.id}>
          <StyledPost
            access={post.access}
            thumbnail={post.backgroundImage}
            title={post.title}
            subTitle={post.subTitle}
            summary={post.content}
            date={`${firebase.firestore.Timestamp.now().toDate()}`}
          />
        </Link>
      ))}
    </ul>
  );
};

export default ListContainer;
