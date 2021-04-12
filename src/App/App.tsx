import Welcome from "pages/Welcome";
import StoreProvider from "redux/store";
import SignIn from "pages/SignIn";

function App() {
  return (
    <StoreProvider>
      <Welcome />
      <SignIn />
    </StoreProvider>
  );
}

export default App;
