import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { combinedState } from "constant/type";
import { idAction, dateAction, resetState } from "redux/reducers/newPost";
import { addPost } from "fb/API";
import StyledWriteHeader from "components/WriteHeader/WriteHeader.styled";
import StyledTextEditor from "components/Editor/TextEditor.styled";
import StyledButton from "components/Button/Button.styled";

type writeContainerProps = {
  className?: string;
};

const WriteContainer = ({ className }: writeContainerProps) => {
  const newPost = useSelector(
    (state: combinedState) => state.newPost
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(idAction());
  }, []);

  const onChangeIdAndDate = async (e: React.MouseEvent<HTMLButtonElement>) => {
    if (newPost.title === '' || newPost.content === '') {
      return;
    } else {
      dispatch(dateAction(new Date()));
      await addPost(newPost);
      dispatch(resetState());
    }
  };

  return (
    <section className={className}>
      <StyledWriteHeader className="" backgroundColor={newPost.backgroundColor} backgroundImage={newPost.backgroundImage}/>
      <StyledTextEditor className="" />
      <StyledButton
        width="300"
        height="30"
        className="write-submit"
        children="UPLOAD"
        type="button"
        onClick={onChangeIdAndDate}
      />
    </section>
  );
};

export default WriteContainer;
