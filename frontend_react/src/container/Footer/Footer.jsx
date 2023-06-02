import React, { useState } from 'react';

import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';
import { motion } from 'framer-motion';

import { client } from '../../client';
import './Footer.scss';

const Footer = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { username, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    setLoading(true);

    const contact = {
      _type: 'contact',
      name: formData.username,
      email: formData.email,
      message: formData.message,
    };

    client.create(contact)
      .then(() => {
        setLoading(false);
        setIsFormSubmitted(true);
      })
      .catch((err) => console.log(err));
  };

  return (
    <motion.div
    whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
    transition={{ duration: 0.5 }}
    >
      <h2 className="footer-head-text">Let's Collaborate!</h2>
      <div className="app__footer">
        <div className="app__footer-body" >
          <div className="app__footer-cards">
            <div className="app__footer-card ">
              <img src={images.gmail} alt="email" />
              <a href="mailto:danya.gordin@gmail.com" className="p-text">danya.gordin@gmail.com</a>
            </div>
            <div className="app__footer-card">
              <img src={images.mobile} alt="phone" />
              <a href="tel:+1 (508) 314-9881" className="p-text">+1 (508) 314-9881</a>
            </div>
          </div>
          {!isFormSubmitted ? (
            <div className="app__footer-form app__flex">
              <div className="app__flex">
                <input className="p-text" type="text" placeholder="Your Name" name="username" value={username} onChange={handleChangeInput} />
              </div>
              <div className="app__flex">
                <input className="p-text" type="email" placeholder="Your Email" name="email" value={email} onChange={handleChangeInput} />
              </div>
              <div>
                <textarea
                  className="p-text"
                  placeholder="Your Message"
                  value={message}
                  name="message"
                  onChange={handleChangeInput}
                />
              </div>
              <button type="button" className="p-text" onClick={handleSubmit}>{!loading ? 'Send Message' : 'Sending...'}</button>
            </div>
          ) : (
            <div className="footer-submit">
              <h3 className="footer-submit-text">
                Thank you for reaching out!
              </h3>
              <div className="footer-submit-image">
                <img src={images.mishaFood} alt="mishaFood" />
              </div>
            </div>
          )}
        </div>

        {!isFormSubmitted ? (

          <div className='footer-image'>

            <img src={images.mishaHike} alt="mishaHike" />
          </div>
          ) : (
          <div></div>
        )}
      </div>

      


    </motion.div>
  );
  
};

export default AppWrap(Footer, 'contact', 'app__lightbluebg');
// export default AppWrap(
//   MotionWrap(Footer, 'app__footer2'),
//   'contact',
//   'app__lightbluebg',
// );
