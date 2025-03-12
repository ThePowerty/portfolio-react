import React from 'react'
import './Projects.css'
import theme_pattern from '../../assets/theme_pattern.svg';
import projects_data from '../../assets/projects_data';
import arrow_icon from '../../assets/arrow_icon.svg'

export const Projects = () => {
    return (
      <div id='projects' className='projects'>
        <div className="projects-title">
          <h1>Mis últimos proyectos</h1>
          <img src={theme_pattern} alt="" />
        </div>
        <div className="projects-container">
          {projects_data.map((work,index)=>{
            return <img key={index} src={work.w_img} alt="" />
          })}
        </div>
        <div className="projects-show-more">
          <p>Show More</p>
          <img src={arrow_icon} alt="" />
        </div>
      </div>
    )
}
