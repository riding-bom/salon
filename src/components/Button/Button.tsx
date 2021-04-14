type buttonProps = {
  children: React.ReactNode;
  type: "button" | "submit" | "reset" | undefined;
  width?: string;
  height?: string;
  className?: string;
  label?: string
  onClick?: any;
  onSubmit?: () => void;
};

const Button = ({
  children,
  className,
  type,
  label,
  onClick,
  onSubmit,
}: buttonProps) => {
  return (
    <button
      className={className}
      type={type}
      aria-label={label}
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
