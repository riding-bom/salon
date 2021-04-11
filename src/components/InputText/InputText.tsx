type inputTextProps = {
  id: string;
  name: string;
  placeholder?: string;
  type?: string;
  className?: string;
};

const InputText = ({
  id,
  name,
  placeholder,
  className,
  type,
}: inputTextProps) => {
  return (
    <form className={className}>
      <input type={type} id={id} name={name} placeholder={placeholder}></input>
      <label htmlFor={id}>{name}</label>
    </form>
  );
};

InputText.defaultProps = {
  type: "text",
};

export default InputText;
