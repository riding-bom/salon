import StyledPost from "components/Post/Post.styled";
import { combinedState, postsList, user } from "constant/type";
import useAuthStateObserver from "customHook/useAuthStateObserver";
import { getUser } from "fb/API";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

type likeList = {
  className?: string;
};

const LikeList = ({ className }: likeList) => {
  const [likePosts, setLikePosts] = useState([] as postsList);

  const postsList = useSelector((state: combinedState) => state.postsList);

  const currentUser = useAuthStateObserver();

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

  useEffect(() => {
    const setLikePost = async () => {
      if (currentUser.userInfo) {
        const userInfo = (await getUser(currentUser.userInfo?.uid)) as user;
        const likePostIdList = userInfo.likePost;
        const list = postsList.filter((post) =>
          likePostIdList?.includes(post.id + "")
        );
        setLikePosts(() => [...list]);
      }
    };
    setLikePost();
  }, []);

  return (
    <ul className={className}>
      {likePosts.map((post) => (
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

export default LikeList;
