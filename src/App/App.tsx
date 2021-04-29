import Welcome from "pages/Welcome";
import StoreProvider from "redux/store";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import StyledHeader from "containers/Header/Header.styled";
import StyledWritePage from "pages/WritePage";
import StyledReadPost from "pages/ReadPost";
import StyledUpdatePage from "pages/UpdatePage";
import LikePosts from "pages/LikePosts";
import StyledFooter from "containers/Footer/Footer.styled";
import ModalDialogs from "pages/ModalDialogs";

import Board from "pages/Board";
import StyledInfoSettingPage from "pages/InfoSettingPage";

function App() {
  return (
    <StoreProvider>
      <Router>
        <StyledHeader />
        <Switch>
          <Route path="/setting">
            <StyledInfoSettingPage />
          </Route>
          <Route path="/write">
            <StyledWritePage />
          </Route>
          <Route path="/like-posts">
            <LikePosts />
          </Route>
          <Route path="/board/:id">
            <Board />
          </Route>
          <Route path="/:postId/update">
            <StyledUpdatePage />
          </Route>
          <Route path="/:postId">
            <StyledReadPost />
          </Route>
          <Route path="/" exact>
            <Welcome />
          </Route>
        </Switch>
        <StyledFooter />
        <ModalDialogs />
      </Router>
    </StoreProvider>
  );
}

export default App;
