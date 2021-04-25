import { ReactComponent as LightMode } from "essets/Icons/light-mode.svg";
import { ReactComponent as DarkMode } from "essets/Icons/dark-mode.svg";
import { ReactComponent as LogOut } from "essets/Icons/logout.svg";
import { ReactComponent as Search } from "essets/Icons/search.svg";
import { ReactComponent as Setting } from "essets/Icons/setting.svg";
import { ReactComponent as Write } from "essets/Icons/write.svg";
import { ReactComponent as LogIn } from "essets/Icons/login.svg";
import { ReactComponent as EmptyHeart } from "essets/Icons/empty-heart.svg";
import { ReactComponent as FillHeart } from "essets/Icons/fill-heart.svg";
import { ReactComponent as Menu } from "essets/Icons/menu.svg";
import { ReactComponent as UserImg } from "essets/Icons/userImg.svg";

type LogoProps = {
  type:
    | "LightMode"
    | "DarkMode"
    | "LogOut"
    | "Search"
    | "Setting"
    | "Write"
    | "LogIn"
    | "EmptyHeart"
    | "FillHeart"
    | "Menu"
    | "UserImg";
};

const Logo = (props: LogoProps) => {
  switch (props.type) {
    case "LightMode":
      return <LightMode />;
    case "DarkMode":
      return <DarkMode />;
    case "LogOut":
      return <LogOut />;
    case "Search":
      return <Search />;
    case "Setting":
      return <Setting />;
    case "Write":
      return <Write />;
    case "Menu":
      return <Menu />;
    case "UserImg":
      return <UserImg />;
    case "LogIn":
      return <LogIn />;
    case "EmptyHeart":
      return <EmptyHeart />;
    case "FillHeart":
      return <FillHeart />;
    default:
      return <LightMode />;
  }
};

export default Logo;
