import styled from "styled-components";
import Post from "./Post";

const StyledPost = styled(Post)`
  background-color: #fff;
  width: 700px;
  height: 200px;
  border-bottom: 1px solid #ccc;
  margin-top: 10px 0;

  a {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-around;
    align-items: center;
    font-size: 1.4rem;
    color: black;
    text-decoration: none;

    & > * {
      width: 464px;
      padding: 5px;
      margin: 0;
      cursor: pointer;
    }
  }

  .post-summary {
    display: flex;
    flex-flow: column nowrap;
    align-items: flex-start;
    justify-content: space-around;
    height: 200px;

    .title,
    .subTitle {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .title {
      font-size: 2.4rem;
    }

    .subTitle {
      font-size: 1.8rem;
    }

    .summary {
      height: 4.2em;
      line-height: 1.4;
      overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
    }

    .post-info {
      display: flex;
      flex-flow: row nowrap;

      & > * {
        margin-right: 10px;
      }
    }
  }

  .thumbnail {
    width: 160px;
    height: 160px;
    background-image: url("${(props) => props.thumbnail}");
    background-size: cover;
    background-position: center;
  }
`;

export default StyledPost;
