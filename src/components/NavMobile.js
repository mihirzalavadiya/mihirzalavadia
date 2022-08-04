import React, { useState } from "react";
import { navigation } from "../data";
import { XIcon, MenuAlt3Icon } from "@heroicons/react/outline";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

const NavMobile = () => {
  const [isOpen, setIsOpen] = useState(false);

  const clickHandler = () => {
    isOpen ? setIsOpen(false) : setIsOpen(true);
  };

  const circleVariants = {
    hidden: {
      scale: 0,
    },
    visible: {
      scale: 100,
      transition: {
        type: "spring",
        stiffness: 160,
        damping: 60,
      },
    },
  };

  const ulVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.1,
      },
    },
  };

  return (
    <nav className="relative">
      <div className="cursor-pointer text-white" onClick={clickHandler}>
        <MenuAlt3Icon className="w-8 h-8" />
      </div>

      {/* Motion of circle */}
      <motion.div
        variants={circleVariants}
        initial="hidden"
        animate={isOpen ? "visible" : "hidden"}
        className="w-5 h-5 md:w-7 md:h-7 rounded-full bg-pink-600 fixed top-0 right-0"
      ></motion.div>

      {/* Motion of menu */}
      <motion.ul
        variants={ulVariants}
        initial="hidden"
        animate={isOpen ? "visible" : ""}
        className={`${
          isOpen ? "right-0" : "-right-full"
        } fixed top-0 bottom-0 w-full flex flex-col justify-center items-center transition-all duration-300 overflow-hidden`}
      >
        <div
          className="cursor-pointer absolute top-8 right-4"
          onClick={clickHandler}
        >
          <XIcon className="w-8 h-8" />
        </div>
        {navigation.map((item, index) => {
          return (
            <li key={index} className="mb-8">
              <Link
                to={item.href}
                activeClass="active"
                spy={true}
                smooth={true}
                duration={500}
                offset={-70}
                className="transition-all duration-300 text-xl cursor-pointer capitalize"
              >
                {item.name}
              </Link>
            </li>
          );
        })}
      </motion.ul>
    </nav>
  );
};

export default NavMobile;
