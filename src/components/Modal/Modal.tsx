import { OverlayStyledModal } from './Modal.styled';
import { useState } from 'react';

type ModalProps = {
  className: string;
  onClose: () => void;
};

const Modal = ({ className, onClose }: ModalProps) => {
  return (
    <>
      <OverlayStyledModal onClick={onClose} />
      <div className='overlayModal'>
        <div className={className}>fill in the title and content</div>;
      </div>
    </>
  );
};

export default Modal;
