import styled from "styled-components";
import WritePageInputGroup from './WritePageInputGroup'

const StyledWritePageInputGroup = styled(WritePageInputGroup) `
  background-color: ${(props)=>(props.backgroundColor ? props.backgroundColor : '#fff')};
  height: 150px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-around;
  position: relative;
  .color-picker {
    position: absolute;
    right: 1px;
    top: 1px;
  }
`;

export default StyledWritePageInputGroup;