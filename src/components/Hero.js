import React from "react";
import ManImg from "../assets/img/banner-man3.webp";

// https://www.quickstart.com/blog/10-front-end-web-developer-portfolios-to-inspire-you/

const Hero = () => {
  return (
    <section
      id="home"
      className="lg:h-[75vh] flex items-center bg-primary lg:bg-cover lg:bg-center lg:bg-no-repeat py-32 lg:py-0 overflow-hidden "
    >
      <div className="container mx-auto h-full">
        <div className="flex items-center h-full pt-8">
          <div className="flex-1 flex flex-col items-center lg:items-start">
            <p className="text-lg text-orange-600 mb-[22px]">Hey, I'm Mihir 👋🏼</p>
            <h1 className="playfair text-4xl leading-[44px] md:text-5xl md:leading-tight lg:text-6xl lg:leading-[1-2] font-bold md:tracking-[-2px]">
              I Build & Design <br />
              Web Interfaces
            </h1>
            <p className="pt-4 pb-8 md:pt-6 md:pb-12 max-w-[480px] text-lg text-center lg:text-left">
              I am passionate about building excellent website that improves the
              lives of those around me.
            </p>
            <button className="btn btn-md bg-orange-600 hover:bg-orange-500 md:btn-lg trasition-all">
                Work with me
            </button>
          </div>
          <div className="hidden lg:flex flex-1 justify-end items-end h-full">
            <img src={ManImg} alt="man" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
