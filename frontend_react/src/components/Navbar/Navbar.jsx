import React, { useState, useEffect } from 'react';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';
import { images } from '../../constants';
import './Navbar.scss';

const sections = ['home', 'about', 'portfolio', 'papers', 'skills', 'contact'];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [toggle, setToggle] = useState(false);

  const handleSectionClick = (section) => {
    setActiveSection(section);
    setToggle(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const currentScrollPos = window.pageYOffset + windowHeight * 0.25; // Scroll position adjusted to 50% into the new section

      sections.forEach((section) => {
        const sectionElement = document.getElementById(section);
        if (sectionElement) {
          const sectionOffset = sectionElement.offsetTop;
          const sectionHeight = sectionElement.offsetHeight;

          if (currentScrollPos >= sectionOffset && currentScrollPos < sectionOffset + sectionHeight) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.logo} alt="logo" />
      </div>

      <ul className="app__navbar-links">
        {sections.map((item) => (
          <li
            className={`app__flex p-text ${activeSection === item ? 'active' : ''}`}
            key={`link-${item}`}
          >
            <div />
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>

      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} />

        {toggle && (
          <motion.div whileInView={{ x: [300, 0] }} transition={{ duration: 0.85, ease: 'easeOut' }}>
            <HiX onClick={() => setToggle(false)} />

            <ul>
              {sections.map((item) => (
                <li key={item}>
                  <a href={`#${item}`} onClick={() => handleSectionClick(item)}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
