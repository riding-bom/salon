type buttonProps = {
  children: React.ReactNode;
  type: "button" | "submit" | "reset" | undefined;
  width?: string;
  height?: string;
  className?: string;
  onClick?: any;
  onSubmit?: () => void;
};

const Button = ({
  children,
  className,
  type,
  onClick,
  onSubmit,
}: buttonProps) => {
  return (
    <button
      className={className}
      type={type}
      onClick={onClick}
      onSubmit={onSubmit}
    >
      {children}
    </button>
  );
};

Button.defaultProps = {
  type: "button",
};

export default Button;
