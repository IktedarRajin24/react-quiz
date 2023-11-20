/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const Footer = ({ children }) => {
  return (
    <div className="flex justify-around items-center w-9/12 mx-auto mt-10">
      {children}
    </div>
  );
};

export default Footer;
