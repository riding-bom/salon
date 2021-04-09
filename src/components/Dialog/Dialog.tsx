import StyledButton from "components/Button/Button.styled";

type dialogProps = {
  children: React.ReactNode;
  className?: string;
};

const Dialog = ({ children, className }: dialogProps) => {
  return (
    <section className={className}>
      {children}
      <StyledButton children="x" />
    </section>
  );
};

export default Dialog;
