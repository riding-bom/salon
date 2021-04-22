import Welcome from "pages/Welcome";
import StoreProvider from "redux/store";
import SignIn from "pages/SignIn";
import SignUp from "pages/SignUp";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import StyledWriteContainer from "containers/WriteContainer/WriteContainer.styled";
import StyledReadPost from "pages/ReadPost";
import StyledWelcome from "pages/Welcome";

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
            <StyledWelcome />
          </Route>
        </Switch>
        <Link to="/write">쓰기</Link>

        <SignIn />
        <SignUp />
      </Router>
    </StoreProvider>
  );
}

export default App;
