import { ChangeEventHandler, FormEvent, FormEventHandler } from "react";

type inputTextProps = {
  id: string;
  name: string;
  placeholder?: string;
  type?: string;
  className?: string;
  value?: string;
  onChange?: ChangeEventHandler;
  onSubmit?: FormEventHandler;
};

const InputText = ({
  id,
  name,
  placeholder,
  className,
  type,
  value,
  onChange,
  onSubmit,
}: inputTextProps) => {
  return (
    <form className={className} onSubmit={onSubmit}>
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
  onSubmit: (e: FormEvent) => e.preventDefault(),
};

export default InputText;
