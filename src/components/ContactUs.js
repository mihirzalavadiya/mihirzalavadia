import React from "react";
import { contact } from "../data";

const ContactUs = () => {
  return (
    <section id="contact" className="section bg-tertiary">
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center">
          <h2 className="section-title before:content-contact relative before:absolute before:opacity-40 before:-top-7 before:-left-40 before:hidden before:lg:block">
            Contact me
          </h2>
          <p className="subtitle">
            I am focusing on to secure a challenging position in an organization
            which encourages my career and enhances growth of my skills to use
            the same for the growth of the company with dedication while gaining
            experience.
          </p>
        </div>
        <div className="flex flex-col lg:gap-x-8 lg:flex-row">
          <div className="flex  flex-col md:flex-row lg:flex-col  md:space-y-0 lg:space-y-8 space-y-8 mb-12 lg:mb-0 lg:pt-2">
            {contact.map((item, index) => {
              const { icon, title, description, subtitle, mail } = item;
              return (
                <div className="flex lg:flex-row gap-x-4" key={index}>
                  <div className="text-orange-600 rounded-sm w-14 h-14 flex items-start justify-center mt-2 mb-4 lg:mb-0 text-2xl">
                    {icon}
                  </div>
                  <div>
                    <h4 className="font-body text-xl mb-1">{title}</h4>
                    <p className="mb-1">{subtitle}</p>
                    <p className="font-normal">
                      {description && description}{" "}
                      <sapn className="text-orange-600 ">{mail && mail}</sapn>
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <form className="space-y-8 w-full max-w-[780px]">
            <div className="flex gap-8 flex-col md:flex-row">
              <input className="input" type="text" placeholder="Your name" />
              <input className="input" type="text" placeholder="Your email" />
            </div>
            <input className="input" type="text" placeholder="Subject" />
            <textarea className="textarea" placeholder="Your message"></textarea>
            <button className="btn btn-lg bg-orange-600 hover:bg-orange-500">
                Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
