import StyledButton from "components/Button/Button.styled";
import Logo from "components/Logo/Logo";
import { combinedState } from "constant/type";
import useAuthStateObserver from "customHook/useAuthStateObserver";
import { setLikePost, setLikeUserInPostDB } from "fb/API";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouteMatch } from "react-router";
import { createOpenAction } from "redux/reducers/openModal";

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
          dispatch(createOpenAction("isOpenAlertCancelLike"));
        }}
      >
        <Logo type="FillHeart" />
      </StyledButton>
    ) : (
      <StyledButton
        onClick={async () => {
          if (currentUser.userInfo?.uid) {
            await setLikePost(currentUser.userInfo?.uid, postId);
            await setLikeUserInPostDB(currentUser.userInfo?.uid, postId);
            setIsLike(true);
          }
        }}
      >
        <Logo type="EmptyHeart" />
      </StyledButton>
    )
  ) : (
    <StyledButton
      onClick={() => dispatch(createOpenAction("isOpenNeedSignIn"))}
    >
      <Logo type="EmptyHeart" />
    </StyledButton>
  );
};

export default LikeButton;
