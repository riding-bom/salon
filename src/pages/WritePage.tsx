import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { combinedState } from "constant/type";
import { idAction, dateAction, resetState } from "redux/reducers/newPost";
import { addPost } from "fb/API";
import styled from "styled-components";
import StyledWriteHeader from "containers/WriteHeader/WriteHeader.styled";
import StyledTextEditor from "containers/Editor/TextEditor.styled";
import StyledButton from "components/Button/Button.styled";

type writePageProps = {
  className?: string;
};

const WritePage = ({ className }: writePageProps) => {
  const newPost = useSelector((state: combinedState) => state.newPost);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(idAction());
  }, []);

  const onChangeIdAndDate = async (e: React.MouseEvent<HTMLButtonElement>) => {
    if (newPost.title === "" || newPost.content === "") {
      window.alert("제목과 내용은 필수 입력 사항입니다.");
      return;
    } else {
      dispatch(dateAction(new Date()));
      await addPost(newPost);
      dispatch(resetState());
    }
  };

  return (
    <section className={className}>
      <StyledWriteHeader
        className=""
        backgroundColor={newPost.backgroundColor}
        backgroundImage={newPost.backgroundImage}
      />
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

const StyledWritePage = styled(WritePage)`
  position: relative;
  background-color: #fff;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  margin: 0 auto;

  & > button {
    position: fixed;
    bottom: 10px;
    border-radius: 15px;
    border: 1px solid #ccc;
  }
`;

export default StyledWritePage;
