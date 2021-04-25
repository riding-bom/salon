import { ChangeEventHandler } from "react";

type selectProps = {
  className: string;
  id?: string;
  name?: string;
  onChange?: ChangeEventHandler;
  defaultValue?: string;
  optionArray: string[];
};

const Select = ({
  className,
  id,
  name,
  onChange,
  defaultValue,
  optionArray = [],
}: selectProps) => {
  return (
    <select
      className={className}
      id={id}
      name={name}
      onChange={onChange}
      value={defaultValue}
    >
      {optionArray.map((optionValue: string, index: number) => (
        <option value={optionValue} key={index}>
          {optionValue}
        </option>
      ))}
    </select>
  );
};

export default Select;
