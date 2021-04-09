import StyledButton from "components/Button/Button.styled";

type dialogProps = {
  children: React.ReactNode;
  className?: string;
};

const Dialog = ({ children, className }: dialogProps) => {
  return (
    <section className={className}>
      {children}
      <StyledButton children="X" />
    </section>
  );
};

export default Dialog;
