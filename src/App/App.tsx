import Welcome from "pages/Welcome";
import StoreProvider from "redux/store";
import SignIn from "pages/SignIn";
import SignUp from "pages/SignUp";
import { BrowserRouter as Router, Route } from "react-router-dom";
import StyledWriteContainer from "containers/WriteContainer/WriteContainer.styled";

function App() {
  return (
    <StoreProvider>
      <Router>
        <Route path="/" exact>
          <Welcome />
        </Route>
        <Route path="/write">
          <StyledWriteContainer />
        </Route>
        
        <SignIn />
        <SignUp />
      </Router>
    </StoreProvider>
  );
}

export default App;
