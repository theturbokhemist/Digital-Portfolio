import React from 'react'

import { BsInstagram } from 'react-icons/bs';
import { FaFacebookF, FaGithub } from 'react-icons/fa';

const SocialMedia = () => (
  <div className="app__social">
    <a href="https://github.com/theturbokhemist">
    <div>
      <FaGithub />
    </div>
    </a>

    <a href="https://www.facebook.com/anyadayaron">
    <div>
      <FaFacebookF />
    </div>
    </a>

    <a href="https://www.instagram.com/supernovanglus/">
    <div>
      <BsInstagram />
    </div>
    </a>
  </div>
);

export default SocialMedia;