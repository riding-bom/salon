import Welcome from "pages/Welcome";
import StoreProvider from "redux/store";
import SignIn from "pages/SignIn";
import SignUp from "pages/SignUp";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import StyledWriteContainer from "containers/WriteContainer/WriteContainer.styled";
import StyledReadPost from "pages/ReadPost";
import AlertDeletePost from "pages/AlertDeletePost";

function App() {
  return (
    <StoreProvider>
      <Router>
        <Switch>
          <Route path="/write">
            <StyledWriteContainer />
          </Route>
          <Route path="/:postId">
            <StyledReadPost />
          </Route>
          <Route path="/" exact>
            <Welcome />
          </Route>
        </Switch>

        <SignIn />
        <SignUp />
        <AlertDeletePost />
      </Router>
    </StoreProvider>
  );
}

export default App;
