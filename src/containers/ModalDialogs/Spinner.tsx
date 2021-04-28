import { ReactComponent as SpinnerSvg } from "essets/Icons/spinner.svg";
import { useSelector } from "react-redux";
import { combinedState } from "constant/type";
import StyledModal from "components/Modal/Modal.styled";
import React from "react";

const Spinner = () => {
  const openModal = useSelector((state: combinedState) => state.isOpenModal);

  return openModal.isOpenSpinner ? (
    <StyledModal>
      <SpinnerSvg />
    </StyledModal>
  ) : null;
};

export default Spinner;
