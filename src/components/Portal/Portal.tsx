import ReactDOM from "react-dom";

type potalProps = {
  children: React.ReactNode;
};

const Portal = ({ children }: potalProps) => {
  const root = document.getElementById("modalRoot") as Element;

  return ReactDOM.createPortal(children, root);
};

export default Portal;
