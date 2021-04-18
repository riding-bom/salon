import { ChangeEventHandler } from "react";

type titleInputProps = {
  className: string;
  id: string;
  value: string;
  placeHolder: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  width?: string;
  color?: string;
};

const TitleInput = ({ className, id, value, placeHolder, onChange }: titleInputProps) => {
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

export default TitleInput;
