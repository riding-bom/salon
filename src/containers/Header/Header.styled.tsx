import { useLocation } from "react-router";
import styled from "styled-components";
import Header from "./Header";

const StyledHeader = () => {
  const { pathname } = useLocation();
  const isMatchingPage = /(^\/write|^\/[0-9]+|update$)/.test(pathname);

  return isMatchingPage ? <SubHeader /> : <MainHeader />;
};

const MainHeader = styled(Header)`
  width: 100%;
  height: 200px;
  border-bottom: 1px solid #ccc;
  padding: 20px 0;

  & > div {
    position: relative;
    display: flex;
    margin: 0 auto;
    width: 800px;

    .header__thumbnail {
      width: 150px;
      height: 160px;
      border-radius: 50%;
    }

    & > div {
      display: flex;
      flex-flow: column nowrap;
      justify-content: center;
      width: 330px;
      margin-left: 20px;

      .header__hostname {
        font-size: 2.4rem;
        margin-bottom: 20px;
      }

      .header__salonIntro {
        font-size: 1.4rem;
        line-height: 1.6rem;
      }
    }

    ul {
      position: absolute;
      right: 20px;
      display: flex;
      flex-flow: row nowrap;
      align-items: center;

      & > li {
        margin-right: 10px;

        & > span {
          font-size: 1.4rem;
          font-weight: 600;
        }
      }
    }
  }
`;

const SubHeader = styled(Header)`
  width: 100%;
  height: 50px;
  border-bottom: 1px solid #ccc;
  padding: 10px 0;

  & > div {
    position: relative;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    margin: 0 auto;
    width: 800px;

    .header__thumbnail {
      width: 30px;
      height: 32px;
      border-radius: 50%;
    }

    & > div {
      margin-left: 20px;

      .header__hostname {
        font-size: 1.4rem;
        font-weight: 600;
      }

      .header__salonIntro {
        display: none;
      }
    }

    ul {
      position: absolute;
      right: 20px;
      display: flex;
      flex-flow: row nowrap;
      align-items: center;

      & > li {
        margin-right: 10px;

        & > span {
          font-size: 1.4rem;
          font-weight: 600;
        }
      }
    }
  }
`;

export default StyledHeader;
