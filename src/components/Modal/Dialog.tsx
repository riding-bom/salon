type dialogProps = {
  children: React.ReactNode;
  className?: string;
};

const Dialog = ({ children, className }: dialogProps) => {
  return (
    <section className={className}>
      <button>x</button>
      {children}
    </section>
  );
};

export default Dialog;
