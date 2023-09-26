import React from "react";
import classNames from "classnames";
import { Search, Filter, FAB } from "../components";

const HomePage = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative container">
      <div
        className={classNames({
          "relative flex flex-col items-start justify-start": true,
          "md:h-[89vh] h-screen w-full": true,
          "overflow-x-hidden": true,
          "dark:bg-gray-900": true,
        })}
      >
        <div
          className={classNames({
            "absolute top-[75px] h-[8vh] w-full ml-10": true,
            "flex items-center justify-start gap-4": true,
            "filter-search-bar:justify-start": true,
            "filter-search-bar:ml-14": true,
            "mobile:-translate-x-4": true,
          })}
        >
          <Search />
          <Filter />
        </div>
        {children}
        <FAB />
      </div>
    </div>
  );
};

export default HomePage;
