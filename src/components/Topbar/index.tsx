import classNames from "classnames";
import React from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { setSearchParams } from "../../redux/reducers/searchSlice";

const Topbar: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const dispatch = useAppDispatch();
  const country = useAppSelector((state) => state.country.country);
  const [job, setJob] = React.useState("");
  const searchParam = useAppSelector((state) => state.searchBar.searchParam);
  return (
    <nav
      className={classNames({
        "bg-main": true,
        "absolute top-0": false,
        "flex items-center justify-start w-screen h-24 px-4": true,
      })}
    >
      <div className={"h-full w-[25vw]"} />
      <form className="relative h-fit w-fit flex items-center justify-center">
        <div className="flex gap-0">
          {/* Country Selector... */}
          <div
            className={classNames({
              "w-[17rem] h-full bg-off-white": true,
              "rounded-l-md border-r border-gray-200": true,
              "flex items-center justify-center": true,
            })}
          >
          </div>
          {/* Divider ... */}
          {/* <div className="w-0.5 h-[2rem] bg-gray-200 mx-2" /> */}
          {/* Job Search ... */}
          <div
            className={classNames({
              "relative w-full flex items-center justify-between": true,
              "border-b border-off-white": true,
            })}
          >
            <input
              type="search"
              id="search-dropdown"
              className="block px-2.5 h-full w-full z-20 text-sm text-off-white bg-main focus:outline-none"
              placeholder="Search"
              value={searchParam}
              onChange={(event) =>
                dispatch(setSearchParams(event.target.value))
              }
              required
            />
            <button
              type="submit"
              className={classNames({
                "p-2.5 h-full": true,
                "bg-stone-800 rounded-tr-lg": true,
                "text-sm font-medium text-white": true,
                "hover:bg-[var(--primary)] transition-all": true,
                "focus:outline-none": true,
              })}
            >
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </button>
          </div>
        </div>
      </form>
    </nav>
  );
};

export default Topbar;
