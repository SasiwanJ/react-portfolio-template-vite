import React from "react";

const SkillMiniIcon = ({ icon, name }) => {

  return (
    <div className="mt-3 w-full flex gap-3 items-center">
      <img src={icon} className="object-scale-down h-8" />
      <p className="text-lg align-middle">{name}</p>
    </div>
  );
};

export default SkillMiniIcon;
