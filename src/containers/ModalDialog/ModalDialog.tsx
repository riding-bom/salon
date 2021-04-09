import StyledDialog from "components/Dialog/Dialog.styled";
import StyledModal from "components/Modal/Modal.styled";
import Portal from "components/Portal/Portal";

type modalDialog = {
  children: React.ReactNode;
};

const ModalDialog = ({ children }: modalDialog) => {
  return (
    <Portal>
      <StyledModal>
        <StyledDialog>{children}</StyledDialog>
      </StyledModal>
    </Portal>
  );
};

export default ModalDialog;
