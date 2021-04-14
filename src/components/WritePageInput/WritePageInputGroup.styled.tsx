import styled from "styled-components";
import WritePageInputGroup from './WritePageInputGroup'

const StyledWritePageInputGroup = styled(WritePageInputGroup) `
  background-color: ${(props)=>(props.backgroundColor ? props.backgroundColor : '#fff')};
  height: 400px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-around;
  position: relative;
  background-image: url(${(props) => props.backgroundImage});
  background-size: cover;
  background-position: 50% 50%;

  .color-picker {
    position: absolute;
    right: 1px;
    top: 1px;
  }

  .background-image-uploader {
    position: absolute;
    right: 1px;
    top: 30px;
  }
`;

export default StyledWritePageInputGroup;