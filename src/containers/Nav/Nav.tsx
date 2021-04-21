import StyledNavButton from "components/Button/NavButton.styled";
import List from "components/List/List";
import Logo from "components/Logo/Logo";

type NavProps = {
  type: "LightMode" | "DarkMode" | "LogOut" | "Search" | "Setting";
  id: string;
};

const Nav = ({ type, id }: NavProps) => {
  return (
    <List id={id}>
      <StyledNavButton type="button">
        <Logo type={type} />
      </StyledNavButton>
    </List>
  );
};

export default Nav;
