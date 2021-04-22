import { ChangeEventHandler } from "react";

type TextAreaProps = {
  className?: string;
  name?: string;
  id?: string;
  cols: number;
  rows: number;
  value: string;
  placeholder?: string;
  onChange: ChangeEventHandler<HTMLTextAreaElement>;
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
  className
}: TextAreaProps) => {
  return (
    <div className={className}>
      <textarea name={name} id={id} cols={cols} rows={rows} value={value} onChange={onChange}>
        {children}
      </textarea>
      <label htmlFor={id}>{value ? "" : placeholder}</label>
    </div>
  );
};

export default TextArea;
