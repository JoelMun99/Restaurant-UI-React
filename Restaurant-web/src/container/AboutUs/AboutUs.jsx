import React from 'react';
import { images } from '../../constants';

import './AboutUs.css';

const AboutUs = () => (
  <div className='app__aboutus app__bg flex__center section__padding' id = "about">
    <div className='app__aboutus-overlay flex__center'>
      <img src= {images.G} alt="g letter"/>
    </div>
    
    <div className='app__aboutus-content flex__center'>
      <div className='app__aboutus-content_about'>
        <h1 className='headtext__cormorant'>About us</h1>
        <img src={images.spoon} alt='about_spoon' className='spoon__img'/>
        <p className='p__opensans'> Geritch is a restaurant that brings people
           together through fresh,locally sourced ingredients and a unique, comforting menu.
           We’re dedicated to providing a memorable dining 
           experience with exceptional food and hospitality.</p>
        <button type='button' className='custom__button'>Know More</button>
      </div>

      <div className='app__aboutus-content_knife flex__center'>
        <img src={images.knife} alt='about_knife'/>
      </div>

      <div className='app__aboutus-content_history'>
        <h1 className='headtext__cormorant'>Our history</h1>
        <img src={images.spoon} alt='about_spoon' className='spoon__img'/>
        <p className='p__opensans'> Founded by Kevin Luo, 
          Geritch started as a small idea and has grown into a beloved local gem. 
          We remain committed to great food, exceptional service, and a welcoming atmosphere as we continue to evolve.</p>
        <button type='button' className='custom__button'>Know More</button>
      </div>
    </div>
  </div>
);

export default AboutUs;
