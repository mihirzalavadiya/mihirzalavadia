import React from "react";

const Project = ({ item }) => {
  const { id, image, category, name } = item;
  return (
    <div key={id} className="flex flex-col items-center text-center">
      <div className="mb-8">
        <img
          src={image}
          alt="project"
          className="h-[220px] w-[500px] rounded-md"
        />
      </div>
      <p className="capitalize mb-3 text-orange-600 text-sm">{category}</p>
      <h3 className="text-xl capitalize mb-4 ubuntu">{name}</h3>
    </div>
  );
};

export default Project;
