import StyledButton from "components/Button/Button.styled";
import Logo from "components/Logo/Logo";
import { combinedState } from "constant/type";
import useAuthStateObserver from "customHook/useAuthStateObserver";
import { setLikePost } from "fb/API";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouteMatch } from "react-router";
import {
  alertCancelLikeOpenAction,
  needSignInOpenAction,
} from "redux/reducers/openModal";

const LikeButton = () => {
  const match = useRouteMatch();
  const { postId } = match.params as { postId: string };

  const [isLike, setIsLike] = useState(false);

  const openModal = useSelector((state: combinedState) => state.isOpenModal);
  const dispatch = useDispatch();

  const currentUser = useAuthStateObserver();

  useEffect(() => {
    if (currentUser.isAuthed) {
      const likePost = currentUser.userInfo?.likePost;
      likePost?.includes(postId) ? setIsLike(true) : setIsLike(false);
    }
  }, [openModal.isOpenAlertCancelLike]);

  return currentUser.isAuthed ? (
    isLike ? (
      <StyledButton
        onClick={() => {
          dispatch(alertCancelLikeOpenAction);
        }}
      >
        <Logo type="FillHeart" />
      </StyledButton>
    ) : (
      <StyledButton
        onClick={async () => {
          currentUser.userInfo?.uid &&
            (await setLikePost(currentUser.userInfo?.uid, postId));
          setIsLike(true);
        }}
      >
        <Logo type="EmptyHeart" />
      </StyledButton>
    )
  ) : (
    <StyledButton onClick={() => dispatch(needSignInOpenAction)}>
      <Logo type="EmptyHeart" />
    </StyledButton>
  );
};

export default LikeButton;
