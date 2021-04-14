import styled from 'styled-components';
import WriteContainer from './WriteContainer';

const StyledWriteContainer = styled(WriteContainer)`
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

export default StyledWriteContainer;
