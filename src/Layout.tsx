import { PropsWithChildren } from "react";
import { Navbar, Sidebar } from "./components";
import classNames from "classnames";

const Layout = (props: PropsWithChildren) => {
  return (
    <div className="relative max-w-screen max-h-screen flex flex-row items-end justify-end bg-white dark:bg-gray-900">
      <Sidebar />
      <div className={classNames({
          "relative h-screen w-[calc(100vw_-_50px)] flex flex-col items-center justify-between": true,
          "bg-[url('/bg-3.png')] bg-cover bg-no-repeat": true,
        })
      }>
        <Navbar />
        {props.children}
      </div>
    </div>
  );
};

export default Layout;
