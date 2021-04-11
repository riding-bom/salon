import StyledButton from "components/Button/Button.styled";
import StyledInputText from "components/InputText/InputText.styled";
import { combinedState } from "constant/type";
import ModalDialog from "containers/ModalDialog/ModalDialog";
import { useSelector } from "react-redux";

const SignIn = () => {
  const isOpenModal = useSelector((state: combinedState) => state.isOpenModal);

  return isOpenModal.isOpenSignIn ? (
    <ModalDialog>
      <h1>salon</h1>
      <StyledInputText id="email" name="email" />
      <StyledInputText type="password" id="password" name="password" />
      <StyledButton>SIGNIN</StyledButton>
      <StyledButton>GOOGLE</StyledButton>
    </ModalDialog>
  ) : null;
};

export default SignIn;
