import { ReactComponent as LightMode } from "essets/Icons/light-mode.svg";
import { ReactComponent as DarkMode } from "essets/Icons/dark-mode.svg";
import { ReactComponent as LogOut } from "essets/Icons/logout.svg";
import { ReactComponent as Search } from "essets/Icons/search.svg";
import { ReactComponent as Setting } from "essets/Icons/setting.svg";
import { ReactComponent as Comment } from "essets/Icons/Comment.svg";

type LogoProps = {
  type: "LightMode" | "DarkMode" | "LogOut" | "Search" | "Setting" | "Comment";
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
    case "Comment":
      return <Comment />;
    default:
      return <LightMode />;
  }
};

export default Logo;
