import { ChangeEventHandler } from "react";

type inputProps = {
  className: string;
  id: string;
  value: string;
  placeHolder: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  width?: string;
};

const Input = ({ className, id, value, placeHolder, onChange }: inputProps) => {
  return (
    <div className={className}>
      <input
        id={id}
        type="text"
        value={value}
        onChange={onChange}
      ></input>
      <label htmlFor={id}>
        {value ? "" : placeHolder}
      </label>
    </div>
  );
};

Input.defaultProps = {
  width: "100%",
};

export default Input;
