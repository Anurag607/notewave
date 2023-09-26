import classNames from "classnames";
import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav
      className={classNames({
        "bg-main": true,
        "absolute top-0": false,
        "flex items-end justify-end w-screen h-16 px-4 py-2 pb-3": true,
        "border-b border-gray-200": true,
      })}
    >
      <div
        className={classNames({
          "flex items-end justify-center w-fit h-fit gap-2": true,
        })}
      >
        <button
          className={classNames({
            "flex items-center justify-center": true,
            "w-fit h-fit": true,
            "rounded bg-[rgba(255,255,255,0.1)]": true,
          })}
        >
          <p
            className={classNames({
              "flex items-center justify-center": true,
              "text-off-white tracking-tighter px-4 py-1": true,
              "rounded-xl bg-off-white border-2 border-black": false,
              // "orkney font-bold text-xl": true,
            })}
          >
            Login
          </p>
        </button>
        <button
          className={classNames({
            "flex items-center justify-center": true,
            "w-fit h-fit": true,
            "rounded bg-[rgba(255,255,255,0.1)]": true,
          })}
        >
          <p
            className={classNames({
              "flex items-center justify-center": true,
              "text-off-white tracking-tighter px-4 py-1": true,
              "rounded-xl bg-off-white border-2 border-black": false,
              // "orkney font-bold text-xl": true,
            })}
          >
            Sign Up
          </p>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
