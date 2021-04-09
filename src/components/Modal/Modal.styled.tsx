import React from "react";
import styled from "styled-components";

const Modal = ({ children }: { children: React.ReactNode }) => {
  return <div>{children}</div>;
};

const StyledModal = styled(Modal)`
  width: 100vw;
  height: 100vh;
  background-color: rgba(196, 196, 196, 0.5);
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;

export default StyledModal;
export { Modal };
