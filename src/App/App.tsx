import Welcome from "pages/Welcome";
import StoreProvider from "redux/store";
import SignIn from "pages/SignIn";
import LoginTestButton from "components/LoginTestButton/LoginTestButton";
import SignUp from "pages/SignUp";

function App() {
  return (
    <StoreProvider>
      <Welcome />
      <SignIn />
      <SignUp />
      <LoginTestButton />
    </StoreProvider>
  );
}

export default App;
