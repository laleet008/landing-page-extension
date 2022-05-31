import React from "react";
import { Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import "./Navbar.css";

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

const NavItem = ({ label, link }) => {
  const { pathname } = useLocation();
  return (
    <li>
      <Link to={link}>
        {label}
        {pathname === link && (
          <AnimatePresence>
            <motion.span
              transition={{ duration: 0.7, type: "spring" }}
              layoutId="link"
            ></motion.span>
          </AnimatePresence>
        )}
      </Link>
    </li>
  );
};

const Navbar = () => {
  return (
    <motion.nav
      whileInView={{ x: [100, 0], opacity: [0, 1] }}
      transition={{ duration: 0.5, delayChildren: 0.5 }}
    >
      <Link to="/" style={{ textDecoration: "none" }}>
        <h2 className="font-poppins tracking-wide">
          Nin<span className="font-poppins">aya</span>
        </h2>
      </Link>
      <motion.ul
        variant={scaleVariants}
        whileInView={scaleVariants.whileInView}
      >
        <NavItem label="Home" link="/" />
        <NavItem label="Terms & Conditions" link="/terms" />
        <NavItem label="Privacy Policy" link="/privacy" />
      </motion.ul>
    </motion.nav>
  );
};

export default Navbar;
