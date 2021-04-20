import Button from 'components/Button/Button';
import List from 'components/List/List';
import Logo from 'components/Logo/Logo';

type NavProps = {
  type: 'LightMode' | 'DarkMode' | 'LogOut' | 'Search' | 'Setting';
  id: string;
};

const Nav = ({ type, id }: NavProps) => {
  return (
    <>
      <List id={id}>
        <Button type='button'>
          <Logo type={type} />
        </Button>
      </List>
    </>
  );
};

export default Nav;
