import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import Nav from "./Nav";
import NavMobile from "./NavMobile";
import SocialMedia from "./SocialMedia";

const Header = () => {
  const [bg, setBg] = useState(false);

  useEffect(() => {
    window &&
      window.addEventListener("scroll", () => {
        return window.scrollY > 50 ? setBg(true) : setBg(false);
      });
  });

  return (
    <header
      className={`${
        bg ? "bg-primary h-20" : "h-24"
      } flex items-center fixed top-0 w-full text-white z-10 transition-all duration-300`}
    >
      <div className="container mx-auto h-full flex items-center justify-between">
        {/* logo */}
        <Link to="home" className="cursor-pointer">
          <span className="text-xl lg:text-2xl logo select-none">Mihir Zalavadiya</span>
        </Link>

        {/* nav */}
        <div className="hidden lg:block">
          <Nav />
        </div>

        {/* socialmedia */}
        <div className="hidden lg:block">
          <SocialMedia />
        </div>

        {/* mobile nav */}
        <div className="lg:hidden">
          <NavMobile />
        </div>
      </div>
    </header>
  );
};

export default Header;
