import Welcome from "pages/Welcome";
import StoreProvider from "redux/store";
import ModalDialog from "containers/ModalDialog/ModalDialog";

function App() {
  return (
    <StoreProvider>
      <Welcome />
      <ModalDialog />
    </StoreProvider>
  );
}

export default App;
