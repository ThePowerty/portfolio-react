import React from "react";
import './Skill.css'

export const Skill = ({ skill, src, title, alt }) => {
  return (
    <div className="skill">
      <p><strong>{skill}</strong></p>
      <img src={src} title={title} alt={alt} />
    </div>
  );
};