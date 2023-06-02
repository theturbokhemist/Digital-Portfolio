import React from 'react'
import { motion } from 'framer-motion';

import { AppWrap } from '../../wrapper';
import { images } from '../../constants'; 
import './Header.scss'

const icons = [images.python2, images.r, images.matlab, 
  images.javascript, images.julia, images.java, images.react, images.pytorch]

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut',
    },
  },
};

const Header = () => {
  return (
    <div id="home" className="app__header app__flex">
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.2 }}
        className="app__header-badge"
      >
        {/* <div className="app__header-badge"> */}
          <div className="badge-cmp app__flex">
            <span>👋</span>
            <div style={{ marginLeft: 1 }}>
              <p className="p-text">Hello World! My name is </p>
              <h1 className="head-text">Danya Gordin</h1>
            </div>
          </div>

          <div className="tag-cmp app__flex">
            <p className="p-text">Computational Biologist</p>
            <p className="p-text">Machine Learning Engineer</p>
            {/* <p className="p-text">Freelancer</p> */}
            <p className="p-text">Dog Dad</p>
          </div>

          <motion.div
          whileInView={{ opacity: [0, 1] }}
          transition={{ duration: 0.2, delayChildren: 0.2 }}
          className="app__header-misha"
          >

            <img src={images.misha_header} alt="misha-badge" />
            <div className="tag-misha app__flex">
              <p className="p-text">Misha is excited to meet you!</p>
            </div>

            {/* <motion.img
            whileInView={{ scale: [0, 1] }}
            transition={{ duration: 1, ease: 'easeInOut' }}
            src={images.circle}
            alt="profile_circle"
            className="overlay_circle"
            /> */}

          </motion.div>

        {/* </div> */}
      </motion.div>

      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.2, delayChildren: 0.2 }}
        className="app__header-img"
      >
        <img src={images.headshot} alt="profile_bg" />
        <motion.img
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 0.2, ease: 'easeInOut' }}
          src={images.circle}
          alt="profile_circle"
          className="overlay_circle"
        />
      </motion.div>

      <motion.div
        variants={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className="app__header-circles"
      >
        {icons.map((circle, index) => (
          <div className="circle-cmp app__flex" key={`circle-${index}`}>
            <img src={circle} alt="profile_bg" />
          </div>
        ))}
      </motion.div>
    </div>
  )
}

export default AppWrap(Header, 'home');