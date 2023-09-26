import { PropsWithChildren } from "react";
import { Navbar, Sidebar, Footer } from "./components";

const Layout = (props: PropsWithChildren) => {
  return (
    <div className="grid min-h-screen grid-rows-header bg-zinc-100 dark:bg-gray-900">
      <div>
        <Navbar />
      </div>

      <div className="relative h-fit w-screen flex flex-row items-center justify-center">
        <Sidebar />
        {props.children}
      </div>

      <div className="bg-zinc-100 dark:bg-gray-900">
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
