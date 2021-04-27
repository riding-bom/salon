import { ChangeEventHandler, FocusEventHandler } from "react";

type TextAreaProps = {
  className?: string;
  name?: string;
  id?: string;
  cols: number;
  rows: number;
  value: string;
  placeholder?: string;
  onChange: ChangeEventHandler<HTMLTextAreaElement>;
  onFocus?: FocusEventHandler;
  children?: React.ReactNode;
};

const TextArea = ({
  name,
  id,
  cols,
  rows,
  children,
  value,
  placeholder,
  onChange,
  className,
  onFocus
}: TextAreaProps) => {
  return (
    <div className={className}>
      {children}
      <div className="textAreaContainer">
        <textarea
          name={name}
          id={id}
          cols={cols}
          rows={rows}
          value={value}
          onChange={onChange}
          onFocus={onFocus}
        />
        <label htmlFor={id}>{value ? "" : placeholder}</label>
      </div>
    </div>
  );
};

export default TextArea;
