import styled from 'styled-components';
import Header from './Header';

const StyledHeader = styled(Header)`
  display: block;
  display: flex;
  align-items: center;
  width: 100%;
  height: 200px;
  border-bottom: 1px solid #e0e3da;
  /* background-color: pink; */

  & > div {
    margin-left: 215px;
    display: flex;

    & > div {
      display: flex;
      flex-flow: column;
      margin: 86px 0 0 25px;

      & > h1 {
        margin-bottom: 19px;
      }
    }
  }
`;

export default StyledHeader;
