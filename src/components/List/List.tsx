type ListProps = {
  id: string;
  className?: string;
  children: React.ReactNode;
};

const List = ({ id, className, children }: ListProps) => {
  return (
    <li className={className} id={id}>
      {children}
    </li>
  );
};

export default List;
