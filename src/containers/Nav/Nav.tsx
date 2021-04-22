import StyledNavButton from "components/Button/NavButton.styled";
import List from "components/List/List";
import Logo from "components/Logo/Logo";
import { MouseEventHandler } from "react";

type NavProps = {
  type:
    | "LightMode"
    | "DarkMode"
    | "LogOut"
    | "Search"
    | "Setting"
    | "Write"
    | "LogIn";
  id: string;
  onClick?: MouseEventHandler;
};

const Nav = ({ type, id, onClick }: NavProps) => {
  return (
    <List id={id}>
      <StyledNavButton type="button" onClick={onClick}>
        <Logo type={type} />
      </StyledNavButton>
    </List>
  );
};

export default Nav;
