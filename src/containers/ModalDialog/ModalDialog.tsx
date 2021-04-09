import StyledDialog from "components/Dialog/Dialog.styled";
import StyledModal from "components/Modal/Modal.styled";
import Portal from "components/Portal/Portal";

const ModalDialog = () => {
  return (
    <Portal>
      <StyledModal>
        <StyledDialog>내용</StyledDialog>
      </StyledModal>
    </Portal>
  );
};

export default ModalDialog;
