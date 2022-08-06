import React, { useEffect, useState } from "react";
import { projectsData, projectsNav } from "../../data";
import Project from "./Project";

const Projects = () => {
  const [item, setItem] = useState({ name: "all" });
  const [projects, setProjects] = useState([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (item?.name === "all") {
      setProjects(projectsData);
    } else {
      const newProjects = projectsData.filter((project) => {
        return project.category.toLowerCase() === item.name;
      });
      setProjects(newProjects);
    }
  }, [item]);

  const handleClick = (e, index) => {
    setItem({ name: e.target.textContent.toLowerCase() });
    setActive(index);
  };

  return (
    <div>
      <nav className="mb-12 max-w-xl mx-auto">
        <ul className="flex md:flex-row justify-evenly items-center text-white">
          {projectsNav.map((projectItem, index) => {
            return (
              <li
                onClick={(e) => {
                  handleClick(e, index);
                }}
                className={`${
                  active === index ? "active" : ""
                } cursor-pointer capitalize`}
                key={index}
              >
                {projectItem.name}
              </li>
            );
          })}
        </ul>
      </nav>

      <section className="grid md:grid-cols-2 xl:grid-cols-3 gap-y-5 md:gap-x-4 lg:gap-x-4 lg:gap-y-4">
        {projects.map((item) => {
          return <Project item={item} key={item.id} />;
        })}
      </section>
    </div>
  );
};

export default Projects;
