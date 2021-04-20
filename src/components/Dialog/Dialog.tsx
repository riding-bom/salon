import StyledButton from "components/Button/Button.styled";
import { ReactComponent as XIcon } from "essets/Icons/x.svg";

type dialogProps = {
  children: React.ReactNode;
  className?: string;
};

const Dialog = ({ children, className }: dialogProps) => {
  return (
    <section className={className}>
      {children}
      <StyledButton className="close-button" children={<XIcon />} />
    </section>
  );
};

export default Dialog;
