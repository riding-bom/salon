import { render, screen } from "@testing-library/react";
import Dialog from "./Dialog";
import StyledModal from "./Modal.styled";

describe("test", () => {
  test("render well?", () => {
    render(
      <StyledModal>
        <Dialog>children</Dialog>
      </StyledModal>
    );
    screen.debug();
  });
});
