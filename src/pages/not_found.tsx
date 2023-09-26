"use client";

import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "../../styles/notfound.module.css";

const Page = () => {
  const navigate = useNavigate();
  const backRef = React.useRef(null);

  return (
    <div className={styles.wrapper}>
      <h1>404</h1>
      <p>
        Oops! The Page you are looking for might have been removed, had it's
        name changed or is temporarily unavailabe.
      </p>
      <button
        onClick={() => navigate(-1)}
        className="relative z-10 px-8 py-2 my-6 comfort signin signin-ripple flex justify-center items-center gap-2 text-xl"
        onMouseOver={() => {
          (backRef.current as any).style.filter = "invert(0)";
        }}
        onMouseOut={() => {
          (backRef.current as any).style.filter = "invert(1)";
        }}
      >
        <img
          ref={backRef}
          src={"/back.png"}
          alt={"Back"}
          className="invert w-[1.5rem] h-[1.5rem] transition duration-300 ease-in-out"
        />
        Go Back
      </button>
    </div>
  );
};

export default Page;
