import React from "react";
// import { FiCornerRightDown } from "react-icons/fi";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { motion } from "framer-motion";

import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero">
      <div className="flex justify-center items-center h-full">
        <motion.div
          className="text-center mb-10"
          whileInView={{ opacity: [0, 1] }}
          transition={{ duration: 0.5, type: "tween" }}
        >
          <h1 className="uppercase font-bold md:text-5xl text-4xl text-gray-200 font-montserrat tracking-widest	">
            Software makes{" "}
            <span className="text-blue-500 font-montserrat"> easy</span>
          </h1>
          <p className="text-gray-300 capitalize md:text-xl text-lg lg:text-2xl md:mt-5 mt-4 md:w-[900px] text-center font-poppins">
            We are a team of developers and designers who create high quality
            products.
          </p>
          <div className="md:mt-8 mt-6 h-[30px] flex items-center justify-center  w-full">
            <AnchorLink href="#features">
              <button className="md:py-2.5 py-2 font-poppins flex  tracking-wider md:px-6 px-4 bg-blue-600 text-white  rounded-md  transition-in-out duration-300 hover:bg-blue-800 md:text-lg uppercase font-medium">
                Explore
                {/* <div className="text-xl ml-4 mt-1">
                  <FiCornerRightDown />
                </div> */}
              </button>
            </AnchorLink>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
