import styled from 'styled-components';
import WriteContainer from './WriteContainer';

const StyledWriteContainer = styled(WriteContainer)`
  background-color: #fff;
  display: flex;
  flex-flow: column nowrap;
  width: 960px;
  margin: 0 auto;
  padding: 20px;

  & > * {
    margin: 10px 0;
  }
  
  & > button {
    margin: 0 auto;
  }
`;

export default StyledWriteContainer;
