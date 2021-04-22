import styled from "styled-components";
import Header from "./Header";

const StyledHeader = styled(Header)`
  width: 100%;
  height: 200px;
  border-bottom: 1px solid #e0e3da;
  padding: 20px 0;

  & > div {
    position: relative;
    display: flex;
    margin: 0 auto;
    width: 800px;

    ul {
      display: flex;
      position: absolute;
      right: 0;
      top: 20px;
    }

    & > div {
      display: flex;
      flex-flow: column;
      margin-left: 20px;
      align-self: flex-end;

      & > h1 {
        margin-bottom: 19px;
      }
    }
  }
`;

export default StyledHeader;
