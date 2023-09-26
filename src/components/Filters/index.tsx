import React from "react";
import classNames from "classnames";
import { openSidebar, closeSidebar } from "../../redux/reducers/sidebarSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";

const Filters: React.FC = () => {
  const isSidebarOpen = useAppSelector((state) => state.sidebar.isSidebarOpen);
  const sidebarRef = React.useRef<HTMLDivElement>(null);
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    console.log(isSidebarOpen);
    const handleResize = () => {
      if (window.innerWidth < 768) {
        dispatch(closeSidebar());
      } else {
        dispatch(openSidebar());
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  React.useEffect(() => {
    setTimeout(() => {
      if (!isSidebarOpen) {
        sidebarRef.current!.classList.add("hidden");
      } else {
        sidebarRef.current!.classList.remove("hidden");
      }
    }, 200);
  }, [isSidebarOpen]);

  const FitlerMenu: React.FC = () => {
    return (
      <div className="flex flex-col flex-1 w-64 p-4 mt-4 text-off-white">
        <a href="#" className="flex items-center space-x-2">
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
            />
          </svg>
          <span>Home</span>
        </a>
      </div>
    );
  };

  return (
    <aside
      ref={sidebarRef}
      className={classNames({
        "flex h-screen bg-gray-100": true,
        "text-main antialiased": true,
        "dark:bg-dark dark:text-light": true,
      })}
    >
      {/* Sidebar */}
      <div
        className={classNames({
          "fixed inset-y-0 z-[100] flex": true,
          "transition-all ease-in-out": true,
          "w-[20rem]": isSidebarOpen,
          "w-0": !isSidebarOpen,
        })}
      >
        {/* Curvy shape */}
        <svg
          className={classNames({
            "absolute inset-0 w-full h-full z-10": true,
          })}
          preserveAspectRatio="none"
          viewBox="0 0 309 800"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M268.487 0H0V800H247.32C207.957 725 207.975 492.294 268.487 367.647C329 243 314.906 53.4314 268.487 0Z" />
        </svg>
        {/* For background */}
        <svg
          className={classNames({
            "text-off-white": true,
            "absolute inset-0 z-0 w-[101%] h-full": true,
            "filter drop-shadow-lg": false,
          })}
          preserveAspectRatio="none"
          viewBox="0 0 309 800"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M268.487 0H0V800H247.32C207.957 725 207.975 492.294 268.487 367.647C329 243 314.906 53.4314 268.487 0Z" />
        </svg>
        {/* Sidebar content */}
        <div
          className={classNames({
            "z-10 flex flex-col flex-1": true,
            "transition-all ease-in-out": true,
            "opacity-0": !isSidebarOpen,
            "opacity-100": isSidebarOpen,
          })}
        >
          {/* Header ... */}
          <div className="flex items-center justify-between flex-shrink-0 w-64 p-4">
            {/* Logo */}
            <a href="#">
              <span className="sr-only">K-UI</span>
              <svg
                aria-hidden="true"
                className="w-16 h-auto text-off-white"
                viewBox="0 0 96 53"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M7.69141 34.7031L13.9492 28.1992L32.0898 52H40.1758L18.4492 23.418L38.5938 0.8125H30.4375L7.69141 26.125V0.8125H0.941406V52H7.69141V34.7031ZM35.3008 26.9102H52.457V21.6016H35.3008V26.9102ZM89.1914 13V35.5117C89.1914 39.2148 88.1719 42.0859 86.1328 44.125C84.1172 46.1641 81.1992 47.1836 77.3789 47.1836C73.6055 47.1836 70.6992 46.1641 68.6602 44.125C66.6211 42.0625 65.6016 39.1797 65.6016 35.4766V0.8125H58.9219V35.6875C58.9688 40.9844 60.6562 45.1445 63.9844 48.168C67.3125 51.1914 71.7773 52.7031 77.3789 52.7031L79.1719 52.6328C84.3281 52.2578 88.4062 50.5352 91.4062 47.4648C94.4297 44.3945 95.9531 40.4453 95.9766 35.6172V13H89.1914ZM89 8H96V1H89V8Z"
                />
              </svg>
            </a>
            {/* Close btn ... */}
            <button
              onClick={() => {
                dispatch(closeSidebar());
              }}
              className={classNames({
                "p-1 rounded-lg focus:outline-none focus:ring": true,
                "bg-gray-100": true,
                "text-main": true,
                "max-md:block hidden": true,
              })}
            >
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
              <span className="sr-only">Close sidebar</span>
            </button>
          </div>
          <FitlerMenu />
          {/* Logout */}
          <div className="flex-shrink-0 p-4 mb-10">
            <button
              className={classNames({
                "flex items-center space-x-2": true,
                "gilroy font-[700] text-2xl text-off-white": true,
              })}
            >
              <svg
                aria-hidden="true"
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                />
              </svg>
              <span>Logout</span>
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Filters;
