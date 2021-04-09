import StyledDialog from "components/Dialog/Dialog.styled";
import StyledModal from "components/Modal/Modal.styled";
import Portal from "components/Portal/Portal";
import { combinedState } from "constant/type";
import { useSelector } from "react-redux";

type modalDialog = {
  children: React.ReactNode;
};

const ModalDialog = ({ children }: modalDialog) => {
  const openModal = useSelector((state: combinedState) => state.openModal);

  return openModal ? (
    <Portal>
      <StyledModal>
        <StyledDialog>{children}</StyledDialog>
      </StyledModal>
    </Portal>
  ) : null;
};

export default ModalDialog;
