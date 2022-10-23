import clsx from "clsx";
import React from "react";

export const IconBox = ({ children, className }) => {
  return (
    <div className= {clsx("bg-smartOrange  w-8 md:w-12 lg:w-16 h-8 md:h-12 lg:h-16 rounded-md text-white md:text-xl lg:text-2xl flex items-center justify-center", className)}>
      {children}
    </div>
  );
};
