import React from "react";
import { Bars3Icon } from "@heroicons/react/24/outline";
import classNames from "classnames";
import { openMenu, closeMenu } from "../../redux/reducers/menuSlice";
import { useOnClickOutside } from "usehooks-ts";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import DarkMode from "../DarkMode";

export type NavItem = {
  label: string;
  href: string;
  icon: React.ReactNode;
};

const Navbar = () => {
  const ref = React.useRef<HTMLDivElement>(null);
  const dispatch = useAppDispatch();
  const { isMenuOpen } = useAppSelector((state: any) => state.menu);
  useOnClickOutside(ref, () => {
    dispatch(closeMenu());
  });

  return (
    <nav
      className={classNames({
        "bg-white text-zinc-500": true, // colors
        "flex items-center justify-between px-8": true, // layout
        "w-screen fixed z-10 px-4 shadow-sm h-[12vh]": true, //positioning & styling
        "dark:bg-gray-900 dark:shadow-[0px_1px_2px_0_rgba(255,255,255,0.1)]": true, //dark-mode
      })}
    >
      <div className="flex justify-center items-center gap-4">
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
      <DarkMode />
      {/* <div className="" ref={ref}>
        <button className="md:hidden cursor-pointer z-[1000]">
          <Bars3Icon
            className="h-6 w-6 cursor-pointer z-[1000]"
            onClick={() => {
              !isMenuOpen ? dispatch(openMenu()) : dispatch(closeMenu());
            }}
          />
        </button>
        <div
          className={classNames({
            "flex flex-col": true,
            "z-10 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700":
              true,
            "absolute top-[4.5rem] right-2": true,
            "md:hidden": true,
            "transition-transform .3s ease-in-out md:-translate-x-0": true, //animations
            "w-0 py-0": !isMenuOpen,
          })}
        >
        </div>
      </div> */}
    </nav>
  );
};

export default Navbar;
