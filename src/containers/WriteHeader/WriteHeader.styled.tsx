import styled from "styled-components";
import WriteHeader from "./WriteHeader";

const StyledWriteHeader = styled(WriteHeader)`
  position: relative;
  width: 800px;
  height: 400px;
  background-color: ${(props) =>
    props.Post.backgroundColor ? props.Post.backgroundColor : "#fff"};
  background-image: url("${(props) => props.Post.backgroundImage}");
  background-size: cover;
  background-position: 50% 50%;
  border-bottom: 1px solid black;

  .selector-group {
    position: absolute;
    top: 5rem;
    left: 0;
  }

  .background-group {
    position: absolute;
    top: 5rem;
    right: 0;
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-around;
    align-items: center;

    .background-image-uploader {
      z-index: 2;
    }

    .background-reset {
      z-index: 2;
      border: 0;
      background-color: transparent;
      outline: none;
    }

    .color-picker {
      z-index: 2;
      margin-top: 1rem;
    }
  }

  .title-group {
    position: absolute;
    top: 10rem;
    left: 0;
    margin-top: 10rem;
    .sub-title {
      margin-top: 5rem;
    }
  }
`;

export default StyledWriteHeader;
