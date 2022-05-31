import React from "react";
import { Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import "./Navbar.css";

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
    <nav>
      <Link to="/" style={{ textDecoration: "none" }}>
        <h2 className="font-poppins">
          Nin <span className="font-poppins">aya</span>{" "}
        </h2>
      </Link>
      <ul>
        <NavItem label="Home" link="/" />
        <NavItem label="Terms & Conditions" link="/terms" />
        <NavItem label="Privacy Policy" link="/privacy" />
      </ul>
    </nav>
  );
};

export default Navbar;
