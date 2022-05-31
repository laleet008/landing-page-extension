import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer flex justify-center text-lg font-poppins font-medium">
      &#9400; Copyright all right reserved. Ninaya{" "}
      <p className="ml-2 text-md">{new Date().getFullYear()}</p>
    </div>
  );
};

export default Footer;
