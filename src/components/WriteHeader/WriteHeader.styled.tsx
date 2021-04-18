import styled from "styled-components";
import WriteHeader from './WriteHeader'

const StyledWriteHeader = styled(WriteHeader) `
  position: relative;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-around;
  width: 100vw;
  height: 400px;
  background-color: ${(props)=>(props.backgroundColor ? props.backgroundColor : '#fff')};
  background-image: url(${(props) => props.backgroundImage});
  background-size: cover;
  background-position: 50% 50%;
  border-bottom: 1px solid black;

  .selector-group {
    position: absolute;
    top: 5rem;
    left: 20%;
  }

  .background-group {
    position: absolute;
    top: 5rem;
    right: 30%;
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-around;
    text-align: center;

    .background-image-uploader {
      z-index: 2;
    }

    .color-picker {
      margin-top: 1rem;
      z-index: 2;
    }
  }

  .title-group {
    position: absolute;
    top: 10rem;
    left: 20%;
    margin-top: 10rem;
    .sub-title {
    margin-top: 5rem;
    }
  }
`;

export default StyledWriteHeader;