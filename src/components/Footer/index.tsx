import classNames from "classnames";
import {
  LinkedinOutlined,
  TwitterOutlined,
  FacebookOutlined,
} from "@ant-design/icons";
import { Link } from 'react-router-dom';

const Footer:React.FC = () => {
  return (
    <footer
      className={classNames({
        "w-screen mx-auto p-4 md:px-6 md:py-2": true,
        "h-[10vh] md:flex md:items-center md:justify-between": true,
        "max-md:flex-col max-md:items-center max-md:justify-center": true,
        "text-zinc-500 dark:bg-gray-900": true,
        "shadow-[0px_-1px_2px_0_rgba(0,0,0,0.075)] dark:shadow-[0px_-1px_2px_0_rgba(255,255,255,0.1)]": true,
      })}
    >
      <div className="flex justify-center items-center gap-4 max-md:mb-2">
        <img src="/logo.png" width={42} height={42} alt="logo" />
        <h3
          className={classNames({
            "font-bold text-lg": true,
            "flex justify-center items-center gap-4": true,
          })}
        >
          NoteWave
        </h3>
      </div>
      <div className="flex justify-center items-center gap-4 ">
        <Link to="#">
          <LinkedinOutlined className="text-2xl text-blue-700" />
        </Link>
        <Link to="#">
          <FacebookOutlined className="text-2xl text-blue-700" />
        </Link>
        <Link to="#">
          <TwitterOutlined className="text-2xl text-blue-700" />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
