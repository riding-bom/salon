import TextArea from "components/TextArea/TextArea";
import { ChangeEventHandler, FocusEventHandler } from "react";

type CommentTextareaProps = {
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

const CommentTextArea = ({
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
}: CommentTextareaProps) => {
  return (
    <>
      <div className={className}>
        {children}
        <TextArea
          cols={cols}
          rows={rows}
          id={id}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          onFocus={onFocus}
        ></TextArea>
      </div>
    </>
  );
};

export default CommentTextArea;
