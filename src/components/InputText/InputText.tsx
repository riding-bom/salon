import { ChangeEventHandler } from "react";

type inputTextProps = {
  id: string;
  name: string;
  placeholder?: string;
  type?: string;
  className?: string;
  value?: string;
  onChange?: ChangeEventHandler;
};

const InputText = ({
  id,
  name,
  placeholder,
  className,
  type,
  value,
  onChange,
}: inputTextProps) => {
  return (
    <form className={className}>
      <input
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      ></input>
      <label htmlFor={id}>{value ? "" : name}</label>
    </form>
  );
};

InputText.defaultProps = {
  type: "text",
};

export default InputText;
