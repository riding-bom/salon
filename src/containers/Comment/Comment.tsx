import StyledCommentButton from "components/Button/CommentButton.styled";
import StyledTextArea from "components/TextArea/TextArea.styled";
import { combinedState } from "constant/type";
import StyledCommentList from "containers/CommentList/CommentList.styled";
import useAuthStateObserver from "customHook/useAuthStateObserver";
import { addComment } from "fb/API";
import { ChangeEventHandler, MouseEventHandler, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouteMatch } from "react-router";
import { $CombinedState } from "redux";
import { commentAction, idAction, postIdAction, userAction } from "redux/reducers/newComment";

const placeHolder =
  "좋은 글을 남겨 주신 작가님께 편지를 남겨 보세요. 편지는 작가님과 작성자에게만 공개됩니다.";

const Comment = () => {
  const userName = useAuthStateObserver().userInfo?.displayName;
  const userUid = useAuthStateObserver().userInfo?.uid;

  const match = useRouteMatch();
  const { postId } = match.params as { postId: string };

  const [comment, setComment] = useState("");
  const dispatch = useDispatch();

  const onChangeComment: ChangeEventHandler<HTMLTextAreaElement> = ({
    target
  }: {
    target: HTMLTextAreaElement;
  }) => {
    dispatch(commentAction(target.value));
    setComment(target.value);
  };

  const newComment = useSelector((state: combinedState) => state.newComment);

  const onClick: MouseEventHandler = target => {
    // dispatch(idAction("4"));
    addComment(newComment);
  };

  useEffect(() => {
    if (userName) dispatch(userAction(userName));
    if (userUid) dispatch(idAction(userUid));
    dispatch(postIdAction(postId));
  }, []);

  // const onChangeTextArea: ChangeEventHandler<HTMLTextAreaElement> = e => {
  //   dispatch(commentAction(e.target.value));
  // };

  return (
    <>
      <div>
        <StyledTextArea
          cols={85}
          rows={8}
          id={"comment"}
          value={comment}
          onChange={onChangeComment}
          placeholder={placeHolder}
        >
          <StyledCommentList />
        </StyledTextArea>
      </div>
      <div>
        <StyledCommentButton onClick={onClick}>Letter to writer</StyledCommentButton>
      </div>
    </>
  );
};

export default Comment;

// 먼저 onClick 이벤트를 버튼에 달고 onClick이벤트에는 함수를 넣어준다.
// 여기서 함수는 firebase에 데이터를 올려주는 함수를 작성(참고: border > button에서 onChangeIdAndDate 를 참조)
// firebase에 올려주는 함수는 api파일에서 실행
// firebase에 있는 데이터를 렌더링 시켜주면 된다.
// 렌더링 해줄 때 id값을 확인하고 post에 있는 id값과 댓글의 id값을 비교하여 일치하는 댓글만 렌더링 시켜준다
// id값 확인할 때는 useMatch를 사용하여 post id값을 불러와 확인 또는 post상태를 불러와 id 확인
