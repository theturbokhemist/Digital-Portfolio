import React, { useState } from 'react'

// import About from './container/About';
// import Footer from './container/Footer';
// import Header from './container/Header';
// import Skills from './container/Skills';
// import Testimonial from './container/Testimonial';
// import Work from './container/Work';

import { About, Footer, Header, Skills, Testimonial, Work, Papers } from './container';
import { Navbar } from './components';
import './App.scss';


const App = () => {
  const [activeSection, setActiveSection] = useState('home');
  return (
    <div className='app'>

    <Navbar />
    <Header />
    <About />
    <Work />
    <Papers />
    <Skills />
    <Footer />

    </div>
  );
}

export default App;