import React from "react";
import { Link } from "react-scroll";
import { social } from "../data";

const Footer = () => {
  return (
    <footer className="bg-primary py-12">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row space-y-6 lg:space-y-0 items-center justify-between">
          <div className="flex space-x-6 items-center justify-center">
            {social.map((item, index) => {
              const { href, icon } = item;
              return (
                <a
                  className="text-orange-600 text-base"
                  href={href}
                  key={index}
                >
                  {icon}
                </a>
              );
            })}
          </div>
          <div>
            <Link to="home" className="cursor-pointer">
              <span className="text-xl lg:text-2xl logo select-none">
                Mihir Zalavadiya
              </span>
            </Link>
          </div>
          <p className="text-paragraph opacity-80 text-[15px]">
            &copy; 2022 mihir zalavadiya. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
