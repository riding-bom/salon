import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { combinedState } from "constant/type";
import { idAction, dateAction, resetState } from "redux/reducers/newPost";
import { addPost } from "fb/API";
import StyledSelect from "components/Select/Select.styled";
import StyledTextEditor from "components/Editor/TextEditor.styled";
import StyledButton from "components/Button/Button.styled";
import StyledWritePageInputGroup from "components/WritePageInput/WritePageInputGroup.styled";

type writeProps = {
  className: string;
};

const WriteContainer = ({ className }: writeProps) => {
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
      //TODO: newPost 상태 reset 함수 content 관련 reset 오류 처리
      dispatch(resetState());
    }
  };

  return (
    <section className={className}>
      <StyledSelect className="" />
      <StyledWritePageInputGroup className="" backgroundColor={newPost.backgroundColor} backgroundImage={newPost.backgroundImage}/>
      <StyledTextEditor className="" />
      <StyledButton
        width="600"
        className="write-submit"
        children="UPLOAD"
        type="button"
        onClick={onChangeIdAndDate}
      />
    </section>
  );
};

export default WriteContainer;
