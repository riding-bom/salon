type selectProps = {
  className: string;
  id?: string;
  name?: string;
  onChange?: any;
  optionArray: string[];
};

const Select = ({ className, id, name, onChange, optionArray=[] }: selectProps) => {
  return (
    <select className={className} id={id} name={name} onChange={onChange}>
      {optionArray
        .map((v: string, i: number) => <option value={v} key={i}>{v}</option>)
      }
    </select>
  );
};

export default Select;
