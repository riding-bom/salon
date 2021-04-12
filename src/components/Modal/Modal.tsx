type modalProps = {
  children: React.ReactNode;
  className?: string;
};

const Modal = ({ children, className }: modalProps) => {
  return <div className={className}>{children}</div>;
};

export default Modal;
