import React from "react";
import "./Features.css";

const Features = () => {
  return (
    <div className="features" id="features">
      <h2 className="text-center font-montserrat uppercase works-heading font-bold">
        Our Works
      </h2>
      <div className="flex md:flex-row flex-col md:mt-20 mt-8 md:gap-24 gap-10">
        <div className="md:w-3/5 w-full">
          <img
            src="assets/feature1.jpg"
            alt="feature first"
            className="rounded-lg	"
          />
        </div>
        <div className=" flex flex-col justify-center">
          <h2 className="font-montserrat uppercase extension-heading md:mb-6 mb-4">
            Time zone extension
          </h2>
          <p className="md:w-[400px] w-full text-gray-800 text-lg font-poppins">
            This extension include different time zones along with local time.
            You can always see the local time of any country. Which will be
            beneficial for your remote work or know your ones far from you.
          </p>
        </div>
      </div>
      <div className="flex md:flex-row flex-col-reverse  md:mt-24 mt-10  gap-8 md:gap-24 md:justify-end">
        <div className="flex flex-col justify-center">
          <h2 className="font-montserrat uppercase  extension-heading md:mb-6 mb-4">
            Switch Images
          </h2>
          <p className="md:w-[400px] text-gray-800 text-lg font-poppins">
            You can adjust the images in the extension to your liking. It also
            changes the theme on changing the image itself. It will comfort on
            your eye. Which can useful for person who works at night or early
            morning or have eye problems.
          </p>
        </div>
        <div className="md:w-3/5">
          <img
            src="assets/feature2.jpg"
            alt="feature first"
            className="rounded-lg	"
          />
        </div>
      </div>
    </div>
  );
};

export default Features;
