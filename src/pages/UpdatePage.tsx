import { useDispatch, useSelector } from "react-redux";
import { combinedState, post } from "constant/type";
import { addPost, getPost } from "fb/API";
import styled from "styled-components";
import StyledWriteHeader from "containers/WriteHeader/WriteHeader.styled";
import StyledTextEditor from "containers/Editor/TextEditor.styled";
import StyledButton from "components/Button/Button.styled";
import { createOpenAction } from "redux/reducers/openModal";
import { useRouteMatch } from "react-router";
import { useEffect, useState } from "react";
import { postAction } from "redux/reducers/newPost";

type UpdatePageProps = {
  className?: string;
};

const UpdatePage = ({ className }: UpdatePageProps) => {
  const newPost = useSelector((state: combinedState) => state.newPost);
  const dispatch = useDispatch();
  const match = useRouteMatch();
  const [post, setPost] = useState({} as post);

  const { postId } = match.params as { postId: string };

  const getPostAsync = async () => {
    const post = await getPost(postId);
    if (post) {
      setPost(() => post as post);
    }
  };

  useEffect(() => {
    getPostAsync();
    dispatch(postAction(post as post));
    console.log(newPost);
  }, []);

  const onClickSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    if (newPost.title === "" || newPost.content === "") {
      dispatch(createOpenAction("isOpenAlertWritePost"));
    } else {
      await addPost(newPost);
    }
  };

  const onClickCancel = () => {
    dispatch(createOpenAction("isOpenAlertCancelWriter"));
  };

  return (
    <section className={className}>
      <StyledWriteHeader className="" Post={newPost} />
      <StyledTextEditor className="" />
      <div className="btn-group">
        <StyledButton
          width="150"
          height="30"
          className="write-cancel"
          children="CANCEL"
          type="button"
          onClick={onClickCancel}
        />
        <StyledButton
          width="150"
          height="30"
          className="write-submit"
          children="UPLOAD"
          type="button"
          onClick={onClickSubmit}
        />
      </div>
    </section>
  );
};

const StyledUpdatePage = styled(UpdatePage)`
  position: relative;
  background-color: #fff;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  margin: 0 auto;
  overflow-x: hidden;

  .btn-group {
    position: fixed;
    bottom: 15px;

    & > button {
      border-radius: 15px;
      border: 1px solid #ccc;
      margin: 0 10px;
    }
  }
`;

export default StyledUpdatePage;
