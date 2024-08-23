import React from 'react';
import Spline from '@splinetool/react-spline';
import CardCarousel from '../components/CardCarousel';
import CardContainer from '../components/CardContainer';
import HeroMid from '../components/Home-Hero-Section/HeroMid';
import Hero from '../components/Home-Hero-Section/Hero';

const Home = () => {
  return (
    <div className="bg-black min-h-screen flex flex-col">
      <div className='flex justify-between mt-16'>
        <div className='md:ml-64 xs:ml-4'>
          <Hero />
        </div>
        <div className='mt-36'>
          <Spline
          scene="https://prod.spline.design/70rWXJWtYcdln4iF/scene.splinecode" 
          width={512}
          height={512}
        />
        </div>
      </div>
      {/* <CardCarousel />
      <HeroMid /> */}
      <CardContainer />
    </div>
  );
};

export default Home;
