import { useDispatch, useSelector } from "react-redux";
import { combinedState, post } from "constant/type";
import { addPost } from "fb/API";
import styled from "styled-components";
import StyledWriteHeader from "containers/WriteHeader/WriteHeader.styled";
import StyledTextEditor from "containers/Editor/TextEditor.styled";
import StyledButton from "components/Button/Button.styled";
import {
  alertCancelWriterOpenAction,
  alertWritePostOpenAction,
} from "redux/reducers/openModal";
import { useRouteMatch } from "react-router";

type UpdatePageProps = {
  className?: string;
};

const UpdatePage = ({ className }: UpdatePageProps) => {
  const match = useRouteMatch();
  const { postId } = match.params as { postId: string };

  const postsList = useSelector((state: combinedState) => state.postsList);

  const dispatch = useDispatch();

  const post = postsList.find((post) => post.id + "" === postId) as post;

  const onClickSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    if (post.title === "" || post.content === "") {
      dispatch(alertWritePostOpenAction);
    } else {
      await addPost(post);
    }
  };

  const onClickCancel = () => {
    dispatch(alertCancelWriterOpenAction);
  };

  return (
    <section className={className}>
      <StyledWriteHeader className="" Post={post} />
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
