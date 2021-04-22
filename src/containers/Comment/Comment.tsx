import StyledCommentButton from "components/Button/CommentButton.styled";
import StyledTextArea from "components/TextArea/TextArea.styled";
import { useState } from "react";

const placeHolder =
  "좋은 글을 남겨 주신 작가님께 편지를 남겨 보세요. 편지는 작가님과 작성자에게만 공개됩니다.";

const Comment = () => {
  const [comment, setComment] = useState("");

  const onChangeComment = ({ target }: { target: HTMLTextAreaElement }) => {
    setComment(target.value);
  };

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
        ></StyledTextArea>
      </div>
      <div>
        <StyledCommentButton type="submit">Letter to writer</StyledCommentButton>
      </div>
    </>
  );
};

export default Comment;
