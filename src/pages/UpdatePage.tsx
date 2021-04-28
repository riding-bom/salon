import { useDispatch, useSelector } from "react-redux";
import { combinedState, post } from "constant/type";
import { addPost, getPost } from "fb/API";
import styled from "styled-components";
import StyledWriteHeader from "containers/WriteHeader/WriteHeader.styled";
import StyledTextEditor from "containers/Editor/TextEditor.styled";
import StyledButton from "components/Button/Button.styled";
import { createOpenAction } from "redux/reducers/openModal";
import { useRouteMatch, useHistory } from "react-router";
import { useEffect } from "react";
import { postAction, resetStateAction } from "redux/reducers/newPost";

type UpdatePageProps = {
  className?: string;
};

const UpdatePage = ({ className }: UpdatePageProps) => {
  const newPost = useSelector((state: combinedState) => state.newPost);
  const dispatch = useDispatch();
  const history = useHistory();
  const match = useRouteMatch();

  const { postId } = match.params as { postId: string };

  useEffect(() => {
    const getPostAsync = async () => {
      const post = (await getPost(postId)) as post;
      if (post) {
        dispatch(postAction(post));
      }
    };

    getPostAsync();

    return () => {
      dispatch(resetStateAction());
    };
  }, []);

  const onClickSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    if (newPost.title === "" || newPost.content === "") {
      dispatch(createOpenAction("isOpenAlertWritePost"));
    } else {
      await addPost(newPost);
      dispatch(resetStateAction());
      history.go(-1);
    }
  };

  const onClickCancel = () => {
    dispatch(createOpenAction("isOpenAlertCancelWriter"));
  };

  return (
    <section className={className}>
      <StyledWriteHeader className="" Post={newPost} />
      <StyledTextEditor className="" defaultContent={newPost.content} />
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
    position: absolute;
    bottom: 50px;

    & > button {
      border-radius: 15px;
      border: 1px solid #ccc;
      margin: 0 10px;
      background-color: #fff;
    }
  }
`;

export default StyledUpdatePage;
