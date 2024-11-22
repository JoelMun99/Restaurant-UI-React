import React from 'react';
import { SubHeading } from '../../components';
import {images} from '../../constants';

import './Chef.css';

const Chef = () => (
  <div className='app__bg app__wrapper section__padding'>
    <div className='app__wrapper_img app__wrapper_img-reverse'>
      <img src={images.chef} alt='chef'/>
    </div>
    
    <div className='app__wrapper_info'>
      <SubHeading title="Chefs Word"/>
      <h1 className='headtext__cormorant'>What We believe in </h1>

      <div className='app__chef-content'>
        <div className='app__chef-content_quote'>
          <img src={images.quote} alt='quote'/>
          <p className='p__opensans'>At Geritch, we’re passionate about creating dishes that tell a story through every bite.</p>
        </div>
        <p className='p__opensans'> I believe in the power of fresh, high-quality ingredients and cooking with love to bring out the best in each flavor. 
            Our goal is to offer a dining experience that’s not only delicious but also memorable. 
            I’m excited to share my culinary creations with you and hope you enjoy every moment at Geritch!"</p>
      </div>

      <div className='app__chef-sign'>
        <p>Kevin Luo</p>
        <p className='p__opensans'> Chef & Founder </p>
        <img src={images.sign} alt='sign'/>
      </div>
    </div>
  </div>
);

export default Chef;