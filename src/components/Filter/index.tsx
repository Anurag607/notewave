import React from "react";
import { AdjustmentsHorizontalIcon } from "@heroicons/react/24/outline";
import classNames from "classnames";
import { openFilter, closeFilter } from "../../redux/reducers/filterSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { useOnClickOutside } from "usehooks-ts";
import { setNoteData } from "../../redux/reducers/noteSlice";
import filterData from "../../scipts/filterScript";

const Filter:React.FC = () => {
  const ref = React.useRef<HTMLDivElement>(null);
  const dispatch = useAppDispatch();
  const { isFilterOpen } = useAppSelector((state: any) => state.filter);
  const { noteData, backupData, categoryData } = useAppSelector(
    (state: any) => state.notes
  );

  useOnClickOutside(ref, () => {
    dispatch(closeFilter());
  });

  const ClickEventHandler = (event: React.MouseEvent<HTMLElement>) => {
    const target = event.currentTarget;
    filterData(noteData, backupData, target.dataset.value!, dispatch);
    dispatch(closeFilter());
  };

  return (
    <div
      ref={ref}
      className={classNames({
        "relative flex items-center justify-center": true,
        "cursor-pointer": true,
      })}
    >
      <button
        className={classNames({
          "cursor-pointer": true,
          "bg-white": true,
          "p-[0.15rem] rounded-md": true,
          "border-2 border-zinc-200": true,
          "mt-1": true,
        })}
      >
        <AdjustmentsHorizontalIcon
          className="h-6 w-6 cursor-pointer z-[1000]"
          onClick={() => {
            !isFilterOpen ? dispatch(openFilter()) : dispatch(closeFilter());
          }}
        />
      </button>
      <div
        className={classNames({
          "flex flex-col overflow-y-scroll": true,
          "z-10 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700":
            true,
          "absolute top-[2.75rem] right-2": true,
          "transition-transform .3s ease-in-out md:-translate-x-0": true, //animations
          "w-0 py-0": !isFilterOpen,
          "h-[10rem]": categoryData.length > 0,
          "w-[8.75rem]": categoryData.length === 0,
        })}
      >
        <li
          className={classNames({
            "bg-red-400 text-white": true, //colors
            "flex gap-4 items-center w-[92.5%]": true, //layout
            "transition-colors duration-300": true, //animation
            "rounded-md p-2 mx-2": true, //self style
            "cursor-pointer": true,
            "py-1 my-1": true,
            "flex items-center justify-start": true, //layout
            hidden: !isFilterOpen,
          })}
          onClick={() => {
            dispatch(setNoteData(backupData));
            dispatch(closeFilter());
          }}
        >
          {"Clear"}
        </li>
        {categoryData.map((item: any, index: number) => {
          return (
            <li
              key={index}
              data-value={item.category_id}
              className={classNames({
                "text-blue-800 hover:bg-blue-800 hover:text-white": true, //colors
                "flex gap-4 items-center w-[92.5%]": true, //layout
                "transition-colors duration-300": true, //animation
                "rounded-md p-2 mx-2": true, //self style
                "cursor-pointer": true,
                "py-1": true,
                "flex items-center justify-start": true, //layout
                hidden: !isFilterOpen,
              })}
              onClick={ClickEventHandler}
            >
              {item.name}
            </li>
          );
        })}
      </div>
    </div>
  );
};

export default Filter;
