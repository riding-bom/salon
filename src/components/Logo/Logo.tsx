import { ReactComponent as LightMode } from "essets/Icons/light-mode.svg";
import { ReactComponent as DarkMode } from "essets/Icons/dark-mode.svg";
import { ReactComponent as LogOut } from "essets/Icons/logout.svg";
import { ReactComponent as Search } from "essets/Icons/search.svg";
import { ReactComponent as Setting } from "essets/Icons/setting.svg";
import { ReactComponent as Write } from "essets/Icons/write.svg";
import { ReactComponent as LogIn } from "essets/Icons/login.svg";

type LogoProps = {
  type:
    | "LightMode"
    | "DarkMode"
    | "LogOut"
    | "Search"
    | "Setting"
    | "Write"
    | "LogIn";
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
    case "LogIn":
      return <LogIn />;
    default:
      return <LightMode />;
  }
};

export default Logo;
