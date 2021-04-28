import { ChangeEventHandler, FormEventHandler, useState } from "react";
import StyledInputText from "components/InputText/InputText.styled";
import { ReactComponent as VisibleIcon } from "essets/Icons/visible.svg";
import { ReactComponent as UnvisibleIcon } from "essets/Icons/unvisible.svg";
import StyledButton from "components/Button/Button.styled";

type passwordInputProps = {
  id: string;
  value?: string;
  onChange?: ChangeEventHandler;
  className?: string;
  onSubmit?: FormEventHandler;
};

const PasswordInput = ({
  id,
  value,
  onChange,
  className,
  onSubmit,
}: passwordInputProps) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className={className}>
      <StyledInputText
        type={isVisible ? "text" : "password"}
        id={id}
        name="Password"
        value={value}
        onChange={onChange}
        onSubmit={onSubmit}
      />
      {isVisible ? (
        <StyledButton onClick={() => setIsVisible(false)}>
          <UnvisibleIcon />
        </StyledButton>
      ) : (
        <StyledButton onClick={() => setIsVisible(true)}>
          <VisibleIcon />
        </StyledButton>
      )}
    </div>
  );
};

export default PasswordInput;
