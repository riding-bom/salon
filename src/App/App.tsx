import Welcome from "pages/Welcome";
import StoreProvider from "redux/store";
import ModalDialog from "containers/ModalDialog/ModalDialog";

function App() {
  return (
    <StoreProvider>
      <Welcome />
      <ModalDialog>
        여기에 컴포넌트를 어떻게 넣느냐에 따라 다양한 모달 다이얼로그 가능
      </ModalDialog>
    </StoreProvider>
  );
}

export default App;
