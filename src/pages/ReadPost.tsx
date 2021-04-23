import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { combinedState, post } from "constant/type";
import Title from "components/Title/Title";
import { ReactComponent as DeleteIcon } from "essets/Icons/delete.svg";
import Button from "components/Button/Button";
import { alertDeletePostOpenAction } from "redux/reducers/openModal";
import { useRouteMatch } from "react-router";
import StyledComment from "containers/Comment/Comment.styled";
import StyledButton from "components/Button/Button.styled";

type readPostProps = {
  className?: string;
};

const ReadPost = ({ className }: readPostProps) => {
  const match = useRouteMatch();
  const { postId } = match.params as { postId: string };

  const postsList = useSelector((state: combinedState) => state.postsList);
  const salonInfo = useSelector((state: combinedState) => state.salonInfo);

  const dispatch = useDispatch();

  const post = postsList.find((post) => post.id + "" === postId) as post;

  const date = post.date
    .toString()
    .slice(18)
    .match(/[0-9]+/)
    ?.toString();

  const { htmlToText } = require("html-to-text");
  const html = post.content;

  const openAlertDialog = () => {
    dispatch(alertDeletePostOpenAction);
  };

  return (
    <main className={className}>
      <header
        style={
          post.backgroundImage !== ""
            ? {
                backgroundImage: `linear-gradient( rgba(0, 0, 0, .5), rgba(0, 0, 0, .5) ), url("${post.backgroundImage}"`,
              }
            : { backgroundColor: `${post.backgroundColor}` }
        }
      >
        <div style={{ color: "white" }}>
          <Title level={1}>
            {post?.title}
            <StyledButton onClick={openAlertDialog}>
              <DeleteIcon />
            </StyledButton>
          </Title>
          <Title level={2}>{post?.subTitle}</Title>
          <Title level={3}>
            {salonInfo?.hostName}
            {date && new Date(+date * 1000).toDateString()}
          </Title>
        </div>
      </header>
      <main>
        {html.split(/<\/p>/).map((p, i) => (
          <p key={i}>{htmlToText(p)}</p>
        ))}
      </main>
      <footer>
        <StyledComment />
      </footer>
    </main>
  );
};

const StyledReadPost = styled(ReadPost)`
  & > header {
    /* background-color: tomato; */
    background-size: cover;
    background-position: center;
    height: 400px;
    font-size: 1.4rem;

    & > div {
      width: 700px;
      margin: 0 auto;
      height: 400px;
      display: flex;
      flex-flow: column nowrap;
      justify-content: flex-end;
      padding: 16px 0;

      & > h1 {
        margin-bottom: 20px;
        font-size: 3.6rem;

        & > button {
          background-color: transparent;
          border: none;
          margin: 0 5px;
          box-shadow: none;

          &:hover {
            background-color: transparent;
          }
        }
      }

      & > h2 {
        margin-bottom: 30px;
        font-size: 2.4rem;
      }
    }
  }

  & > main {
    width: 700px;
    margin: 60px auto;
    font-size: 1.4rem;
    text-indent: 1em;
    line-height: 1.6em;
  }

  & > footer {
    display: flex;
    justify-content: center;
  }
`;

export default StyledReadPost;
