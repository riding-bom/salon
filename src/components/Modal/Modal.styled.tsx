import styled from "styled-components";
import Modal from "./Modal";

const StyledModal = styled(Modal)`
  width: 100vw;
  height: 100vh;
  background-color: rgba(196, 196, 196, 0.5);
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  backdrop-filter: blur(5px);
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default StyledModal;
