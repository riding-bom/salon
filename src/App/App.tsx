import Welcome from "pages/Welcome";
import StoreProvider from "redux/store";

function App() {
  return (
    <StoreProvider>
      <Welcome />;
    </StoreProvider>
  );
}

export default App;
