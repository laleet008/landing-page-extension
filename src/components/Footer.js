import React from "react";
import { motion } from "framer-motion";

import "./Footer.css";

const Footer = () => {
  return (
    <motion.footer
      className="footer flex justify-center text-lg font-poppins font-medium"
      whileInView={{ x: [100, 50, 0], opacity: [0, 0, 1] }}
      transition={{ duration: 0.5 }}
    >
      &#9400; Copyright all right reserved. Ninaya{" "}
      <p className="ml-2 text-md">{new Date().getFullYear()}</p>
    </motion.footer>
  );
};

export default Footer;
