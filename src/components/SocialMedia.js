import React from "react";
import { social } from "../data";

const SocialMedia = () => {
  return (
    <nav>
      <ul className="flex space-x-6">
        {social.map((item, index) => {
          return (
            <li
              className="flex justify-center items-center text-orange-600"
              key={index}
            >
              <a href={item.href} className='text-base' target="blank">
                {item.icon}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default SocialMedia;
