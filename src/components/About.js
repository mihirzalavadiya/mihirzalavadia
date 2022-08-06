import React from "react";
import Image from "../assets/img/mihirzalavadiya.webp";

const About = () => {
  return (
    <section id="about" className="section bg-secondary">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row gap-12 md:gap-10 lg:gap-24">
          <img
            src={Image}
            alt="mihir zalavadiya"
            className="object-cover md:h-[350px] md:w-[350px] lg:h-[400px] lg:w-[566px] h-[400px] w-[566px] md:mx-auto lg:mx-0 rounded-2xl"
          />
          <div className="flex flex-col items-center text-center md:items-start md:text-left">
            <div className="flex flex-col">
              <h2 className="text-3xl lg:text-4xl font-medium lg:font-extrabold mb-3 before:content-about relative before:absolute before:opacity-40 before:-top-[2rem] before:hidden before:lg:block">
                Mihir Zalavadiya
              </h2>
              <p className="mb-4 text-orange-600">I am a Web Developer</p>
              <hr className="mb-8 opacity-5 md:mb-6" />
              <p className="mb-8 md:mb-6">
                I am focusing on to secure a challenging position in an
                organization which encourages my career and enhances growth of
                my skills to use the same for the growth of the company with
                dedication while gaining valuable experience. I'm quietly
                confident, naturally curious, and perpetually working on
                improving my chops one design problem at a time.
              </p>
            </div>
            <button className="btn btn-md bg-orange-600 hover:bg-orange-500 md:btn-lg trasition-all">
              <a
                href="https://drive.google.com/file/d/1q5wkKvzUyz633lJOSAKpnIQnS4QQgwje/view?usp=sharing"
                target="blank"
              >
                Download CV
              </a>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
