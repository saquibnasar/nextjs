"use client";

import { useEffect } from "react";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error);
    console.log("r");
  });
  return (
    <>
      <div>
        somthing went wrong
        <button
          onClick={() => {
            reset();
          }}
        ></button>
      </div>
    </>
  );
}
