import Test from "components/Test/Test";

type HeaderProps = {
  className?: string;
};

const Header = ({ className }: HeaderProps) => {
  return (
    <header className={className}>
      <Test />
    </header>
  );
};

export default Header;
