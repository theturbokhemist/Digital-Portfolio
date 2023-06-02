import React, { useState, useEffect} from 'react';
import { motion } from 'framer-motion';

import { AppWrap } from '../../wrapper'
import { images, documents } from "../../constants"
import './About.scss'
import abouts from '../Modals/Aboutmodals'


const About = () => {

  const [selectedAbout, setSelectedAbout] = useState(null);


  const openPopup = (about) => {
    setSelectedAbout(about);
  };

  const closePopup = () => {
    setSelectedAbout(null);
  };



  return (
    <div id="about">

      <blockquote className="app__about-text">

        <h2> Mission </h2>

        I envision a future where people and AI work in concert for the <span> betterment of the world. </span>
        <div style={{ lineHeight: '35%' }}> <br/> </div>
        My mission is to develop human-centered AI that will help tackle the most pressing challenges in <span> medicine, education, public health, and the environment.</span> 
      </blockquote>

      <div className="app__profiles">

        {abouts.map((about, index) => (

          <motion.div
          whileInView={{ opacity: 1 }}
          whileHover={{ scale: 1.25 }}
          transition={{ duration: 0.5, type: 'tween'}}
          className="app__profile-item"
          key={about.title + index}
          onClick={() => openPopup(about)}
          >

            <img src={about.imgUrl} alt={about.title}/>

            <h2 className='bold-text' style={{marginTop: 10 }}>
              {about.title}
            </h2>

          </motion.div>
        ))}

      </div>

      {selectedAbout && (
        <div className="about-modal">

          <button className ="close-button" onClick={closePopup}>&times;</button>
          <selectedAbout.modal />
          <div className="about-modal-close">
          <button className="button-close-project" onClick={closePopup}>Close Info</button>
          </div>


        </div>
      )}

      {selectedAbout && (
        <div id="overlay" onClick={closePopup}></div>
        )
      }

      <blockquote className="app__about-cv-text">

        Please click &nbsp;
        <a href={documents.resumePDF} download="DanyaGordinCV">
        HERE
        </a>
        &nbsp; to download my CV

      </blockquote>




      </div>
    

  )
}

export default AppWrap(About, 'about');


