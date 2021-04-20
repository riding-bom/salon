type validationTextProps = {
  children: React.ReactNode;
  className?: string;
};

const ValidationText = ({ children, className }: validationTextProps) => {
  return <p className={className}>{children}</p>;
};

export default ValidationText;
