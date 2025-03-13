import React from "react";
import java_logo from "../../assets/skills/java.png";
import spring_logo from "../../assets/skills/spring.png"
import python_logo from "../../assets/skills/python.png"
import django_logo from "../../assets/skills/django.png"
import react_logo from "../../assets/skills/react.png"
import angular_logo from "../../assets/skills/angular.png"
import { Skill } from "./components";
import "./Skills.css";
import theme_pattern from "../../assets/theme_pattern.svg";

export const Skills = () => {
  return (
    <div className="skills">
      <div className="skills-title">
        <h1>Skills</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="skills-container">
        <Skill skill="Java" src={java_logo} title="Java" alt="Java-logo" />
        <Skill skill="Spring" src={spring_logo} title="Spring" alt="Spring-logo" />
        <Skill skill="Python" src={python_logo} title="Python" alt="Python-logo" />
        <Skill skill="Django" src={django_logo} title="Django" alt="Django-logo" />
        <Skill skill="React" src={react_logo} title="React" alt="React-logo" />
        <Skill skill="Angular" src={angular_logo} title="Angular" alt="Angular-logo" />        
      </div>
    </div>
    
  );
};
