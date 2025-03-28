import React from 'react';
import { images } from '../../constants';
import { SubHeading } from '../../components';


const FindUs = () => (
  <div className='app__bg app__wrapper section__padding' id="contact">
    <div className='app__wrapper_info'>
      <SubHeading title={"contact"}/>
      <h1 className='headtext__cormorant' style={{ marginBottom: "3rem"}}> Find us</h1>
      <div className='app__wrapper-content'>
        <p className='p__opensans' style={{ color:"#DCCA87", margin: "2rem 0" }}>Opening hours</p>
        <p className='p__cormorant'> Mon - Fri: 10:00am - 02:00am </p>
        <p className='p__cormorant'> Mon - Fri:  10:00am - 03:00am </p>
      </div>
      <button className='custom__button'style={{marginTop:"2rem"}}>Visit us</button>

    </div>

    <div className='app__wrapper_img'>
      <img src={images.findus} alt='findus'/>
    </div>
  </div>
);

export default FindUs;
