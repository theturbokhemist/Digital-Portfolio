import React, { useState, useEffect} from 'react';
import { color, motion } from 'framer-motion';
import './Work.scss' 

import { AppWrap } from '../../wrapper'
import { images } from "../../constants"
import projects from '../Modals/Projectmodals'


const Portfolio = () => {

  const [selectedProject, setSelectedProject] = useState(null);

  const openPopup = (project) => {
    setSelectedProject(project);
  };

  const closePopup = () => {
    setSelectedProject(null);
  };


  return (
    <div  className="portfolio-main">

        <div className="portfolio-header">
          <h2> Personal Projects </h2>
          <p> A collection of some personal and academic projects I've worked on recently. </p>
          <p className="ood-message">
          (This section is slightly out of date. Very busy these days, but will update soon!) </p>
        </div>

      <div className="app__projects">

        {projects.map((project, index) => (

          <motion.div
          whileInView={{ opacity: 1 }}
          whileHover={{ scale: 0.9}}
          transition={{ duration: 0.5, type: 'tween'}}
          className="app__project-item"
          key={project.title + index}
          >

            <div className="image-wrapper" onClick={() => openPopup(project)}> 

              <img src={project.imgUrl} alt={project.title}/>
              <div className="project-info">

                <h2 className="project-title">{project.title}</h2>
                <p className='p-text' style={{ marginTop: '1rem' }}>
                {project.summary}
                </p>

              </div>
            </div>
          </motion.div>
        ))}

      </div>
      

      {selectedProject && (
        <div className="project-modal">

            <div className="project-modal-header">
              <h1 className="project-modal-header-title"> {selectedProject.title}</h1>
            </div>
            <button className ="close-button" onClick={closePopup}>&times;</button>

            <h3 className="project-modal-summary">{selectedProject.summary}</h3>
  

            <div className="project-modal-body">

              <selectedProject.description />

              <p>
              Click <a href={selectedProject.github}>HERE</a> to view this project on GitHub!
              </p>

              <button className="button-close-project" onClick={closePopup}>Close Project</button>
            </div>

        </div>
      )}

      {selectedProject && (
        <div id="overlay" onClick={closePopup}></div>
        )
      }
    </div>
  )
}

export default AppWrap(Portfolio, 'portfolio')
// export default Work