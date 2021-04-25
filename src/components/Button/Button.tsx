import { FormEventHandler, MouseEventHandler } from "react";

type buttonProps = {
  children: React.ReactNode;
  type?: "button" | "submit" | "reset" | undefined;
  width?: string;
  height?: string;
  className?: string;
  onClick?: MouseEventHandler;
  onSubmit?: FormEventHandler;
  disabled?: boolean;
  label?: string;
  name?: string;
};

const Button = ({
  children,
  className,
  type,
  label,
  onClick,
  onSubmit,
  disabled,
  name
}: buttonProps) => {
  return (
    <button
      className={className}
      type={type}
      aria-label={label}
      onClick={onClick}
      onSubmit={onSubmit}
      disabled={disabled}
      name={name}
    >
      {children}
    </button>
  );
};

Button.defaultProps = {
  type: "button"
};

export default Button;
