import styled from 'styled-components';
import Modal from './Modal';

const StyledModal = styled(Modal)`
  width: 512px;
  height: 768px;
  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;
  background: lightgray;
  border-radius: 16px;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.04);

  margin: 0 auto;

  margin-top: 96px;
  margin-bottom: 32px;
  display: flex;
  flex-direction: column;
  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  z-index: 1000;
`;

const OverlayStyledModal = styled.div`
  box-sizing: border-box;
  margin: 0 !important;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 999;
`;

export { StyledModal, OverlayStyledModal };
