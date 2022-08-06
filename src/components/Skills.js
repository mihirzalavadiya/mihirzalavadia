import React from "react";
import { skills } from "../data";

const Skills = () => {
  return (
    <section id="skills" className="bg-tertiary py-12">
      <div className="container mx-auto">
        <div className="grid grid-cols-8">
          {skills.map((skill, index) => {
            return (
              <div key={index} className="flex justify-center items-center">
                <img src={skill.image} alt="icons" />
              </div>
            );
          })}
        </div>
      </div>
    </section> 
  );
};

export default Skills;
