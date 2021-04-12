type buttonProps = {
  children: React.ReactNode;
  type: "button" | "submit" | "reset" | undefined;
  width?: string;
  height?: string;
  className?: string;
};

const Button = ({ children, className, type }: buttonProps) => {
  return (
    <button className={className} type={type}>
      {children}
    </button>
  );
};

Button.defaultProps = {
  type: "button",
};

export default Button;
