import ReactTooltip from 'react-tooltip';
import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { images } from '../../constants';
import './Skills.scss' 

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


const skills = [
  {
    title: 'Machine Learning',
    imgList: [images.pytorch, images.tensorflow, images.python, images.numpy, images.pandas,
      images.colab],
    references: ['', ''],
  },
  {
    title: 'Data Science',
    imgList: [images.r, images.python, images.matlab, images.julia, images.scala, images.mvb,
       images.sql, images.swift, images.numpy, images.pandas, images.anaconda, 
      images.jupyter, images.colab, images.git, images.github, images.spyder],
    references: ['', ''],
  },
  {
    title: 'Programming',
    imgList: [images.r, images.python, images.javascript, images.java,
       images.julia, images.matlab, images.cpp, images.html, images.css, images.ruby,
      images.git, images.github, images.bash, images.windows, images.linux, images.macos, images.sql,
    images.swift, images.colab, images.spyder, images.jupyter, images.colab, images.typescript],
    references: ['', ''],
  }, 
  {
    title: 'Web Development',
    imgList: [images.react, images.node, images.javascript, images.html, images.css, images.ruby,
       images.sass, images.figma],
    references: ['', ''],
  }
];

const Skills = () => {
  const [activeSkill, setActiveSkill] = useState('Data Science');

  const handleSkillsFilter = (item) => {
    setActiveSkill(item);
  };

  return (
    <>
      <h2 className="skills-head-text"> Technical Skills</h2>

      <div className="skills-tabs">
        {skills.map((skill, index) => (
          <div
            key={index}
            onClick={() => handleSkillsFilter(skill.title)}
            className={`app__work-filter-item app__flex p-text ${
              activeSkill === skill.title ? 'skill-active' : ''
            }`}
          >
            {skill.title}
          </div>
        ))}
      </div>

      <motion.div 
      className="skills-circles">

        {skills.map((skill) => {
          if (activeSkill === skill.title) {
            return skill.imgList.map((skillImg, index) => (

              skill.references[index] ? (



              <a href={skill.references[index]}>
              <div key={index} className={`skills-bubble ${activeSkill}`}>
                
                <img src={skillImg} alt={skill.title} />
                
            </div>
            </a>

              ) : (

                <div key={index} className={`skills-bubble ${activeSkill}`}>
                
                <img src={skillImg} alt={skill.title} />
                
            </div>

              )

            ));
          }
        })}
      </motion.div>
    </>
  );
};

export default AppWrap(Skills, 'skills');
