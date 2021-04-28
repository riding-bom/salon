import Welcome from "pages/Welcome";
import StoreProvider from "redux/store";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import StyledWritePage from "pages/WritePage";
import StyledReadPost from "pages/ReadPost";
import StyledUpdatePage from "pages/UpdatePage";
import LikePosts from "pages/LikePosts";
import ModalDialogs from "pages/ModalDialogs";
import StyledSettingPage from "pages/SettingPage";
import Board from "pages/Board";

function App() {
  return (
    <StoreProvider>
      <Router>
        <Switch>
          <Route path="/setting">
            <StyledSettingPage />
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

        <ModalDialogs />
      </Router>
    </StoreProvider>
  );
}

export default App;
