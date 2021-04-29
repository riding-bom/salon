import { useEffect } from "react";
import { useLocation } from "react-router";
import styled from "styled-components";
import Header from "./Header";

const StyledHeader = () => {
  const { pathname } = useLocation();

  const isMatchingPage = /(write|[^0-9]+|update$)/.test(pathname);

  useEffect(() => {
    console.log("path:", pathname);

    switch (pathname) {
      case "write":
      case "/:postId/update":
      case "/:postId":
        break;
      default:
    }
  }, [pathname]);

  return isMatchingPage ? <SubHeader /> : <MainHeader />;
};

const MainHeader = styled(Header)`
  width: 100%;
  height: 200px;
  border-bottom: 1px solid #e0e3da;
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
      flex-flow: column;
      margin-left: 20px;
      align-self: flex-end;

      .header__hostname {
        font-size: 2.4rem;
        margin-bottom: 19px;
      }

      .header__salonIntro {
        font-weight: 200px;
        font-size: 1.4rem;
        width: 330px;
        line-height: 1.6rem;
      }
    }

    ul {
      display: flex;
      position: absolute;
      right: 20px;

      & > li {
        margin-left: 10px;
      }
    }
  }
`;

const SubHeader = styled(Header)`
  width: 100%;
  height: 50px;
  border-bottom: 1px solid #e0e3da;
  padding: 20px 0;
  background-color: red;

  & > div {
    position: relative;
    display: flex;
    margin: 0 auto;
    width: 800px;

    .header__thumbnail {
      width: 30px;
      height: 32px;
      border-radius: 50%;
    }

    & > div {
      display: flex;
      flex-flow: column nowrap;
      margin-left: 20px;
      /* align-self: flex-end; */

      .header__hostname {
        font-size: 1.4rem;
        /* margin-bottom: 19px; */
      }

      .header__salonIntro {
        display: none;
      }
    }

    ul {
      display: flex;
      position: absolute;
      right: 20px;

      & > li {
        margin-left: 10px;
      }
    }
  }
`;

export default StyledHeader;
