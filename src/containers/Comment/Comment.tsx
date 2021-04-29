import StyledCommentButton from "components/Button/CommentButton.styled";
import { combinedState, comment } from "constant/type";
import StyledCommentList from "containers/CommentList/CommentList.styled";
import CommentTextArea from "containers/CommentTextArea/CommentTextArea";
import StyledCommentTextArea from "containers/CommentTextArea/CommentTextArea.styled";
import useAuthStateObserver from "customHook/useAuthStateObserver";
import { addComment, getAllComment } from "fb/API";
import {
  ChangeEventHandler,
  FocusEventHandler,
  MouseEventHandler,
  useEffect,
  useState,
} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouteMatch } from "react-router";
import { renderAction } from "redux/reducers/comment";
import {
  commentAction,
  dateAction,
  idAction,
  postIdAction,
  resetCommentAction,
  userAction,
  userUidAction,
} from "redux/reducers/newComment";
import { createOpenAction } from "redux/reducers/openModal";

const placeHolder =
  "좋은 글을 남겨 주신 작가님께 편지를 남겨 보세요. 편지는 작가님과 작성자에게만 공개됩니다.";

const Comment = () => {
  const userName = useAuthStateObserver().userInfo?.displayName;
  const userUid = useAuthStateObserver().userInfo?.uid;
  const isAuthed = useAuthStateObserver().isAuthed;

  const match = useRouteMatch();
  const { postId } = match.params as { postId: string };

  const [comment, setComment] = useState("");
  const dispatch = useDispatch();

  const onChangeComment: ChangeEventHandler<HTMLTextAreaElement> = ({
    target,
  }: {
    target: HTMLTextAreaElement;
  }) => {
    dispatch(commentAction(target.value));
    setComment(target.value);
  };

  const newComment = useSelector((state: combinedState) => state.newComment);

  const onClick: MouseEventHandler = async (target) => {
    if (isAuthed) {
      if (newComment.comment) {
        await addComment(newComment);
        setComment("");
        resetCommentAction && dispatch(resetCommentAction());
        const getCommentInfo = async () => {
          const commentList = await getAllComment(postId + "");
          if (commentList) dispatch(renderAction(commentList as comment[]));
          // dispatch(dateAction(new Date()));
        };
        getCommentInfo();
      } else return;
    } else {
      dispatch(createOpenAction("isOpenNeedSignIn"));
    }
  };

  const onFocus: FocusEventHandler = () => {
    if (isAuthed) {
      return;
    } else {
      dispatch(createOpenAction("isOpenNeedSignIn"));
    }
  };

  useEffect(() => {
    dispatch(idAction());
    userName && dispatch(userAction(userName));
    userUid && dispatch(userUidAction(userUid));
    dispatch(postIdAction(postId));
  }, [userName, userUid, comment]);

  return (
    <>
      <div>
        <StyledCommentTextArea
          cols={85}
          rows={8}
          id={"comment"}
          value={comment}
          onChange={onChangeComment}
          placeholder={placeHolder}
          onFocus={onFocus}
        >
          <StyledCommentList />
        </StyledCommentTextArea>
      </div>
      <div>
        <StyledCommentButton onClick={onClick}>
          Letter to writer
        </StyledCommentButton>
      </div>
    </>
  );
};

export default Comment;
