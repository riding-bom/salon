import { useDispatch } from "react-redux";
import { signinCloseAction, signupCloseAction } from "redux/reducers/openModal";

type modalProps = {
  children: React.ReactNode;
  className?: string;
};

const Modal = ({ children, className }: modalProps) => {
  const dispatch = useDispatch();

  const closeModal = (e: any) => {
    if (!e.target.matches("div, .close-button, .close-button *")) return;
    dispatch(signinCloseAction);
    dispatch(signupCloseAction);
  };

  return (
    <div className={className} onClick={closeModal}>
      {children}
    </div>
  );
};

export default Modal;
