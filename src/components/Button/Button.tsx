import { FormEventHandler, MouseEventHandler } from "react";

type buttonProps = {
  children: React.ReactNode;
  type: "button" | "submit" | "reset" | undefined;
  width?: string;
  height?: string;
  className?: string;
  onClick?: MouseEventHandler;
  onSubmit?: FormEventHandler;
  disabled?: boolean;
};

const Button = ({
  children,
  className,
  type,
  onClick,
  onSubmit,
  disabled,
}: buttonProps) => {
  return (
    <button
      className={className}
      type={type}
      onClick={onClick}
      onSubmit={onSubmit}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

Button.defaultProps = {
  type: "button",
};

export default Button;
