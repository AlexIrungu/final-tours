import React from "react";
import clsx from "clsx";

const Input = ({ className, type = "text", ...props }) => {
  return (
    <input
      type={type}
      className={clsx(
        "w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all",
        className
      )}
      {...props}
    />
  );
};

export default Input;