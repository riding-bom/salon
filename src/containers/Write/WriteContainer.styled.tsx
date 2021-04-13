import styled from 'styled-components';
import WriteContainer from './WriteContainer';

const StyledWriteContainer = styled(WriteContainer)`
  display: flex;
  flex-flow: column nowrap;
  width: 960px;
  margin: 0 auto;
  padding: 20px;

  & > * {
    margin: 10px 0;
  }
`;

export default StyledWriteContainer;
