import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AboutImg from '../public/assets/about2.jpg';

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p className='uppercase text-xl tracking-widest text-[#5651e5]'>
            About
          </p>
          <h2 className='py-4'>Who I Am</h2>
          <p className='py-2 text-gray-600'>
          I am a skilled professional with expertise in online marketing, commercial content creation, 
          and developing mobile responsive front-end UI applications that seamlessly integrate with back-end technologies. 
          My passion for learning new ideas and technologies is matched only by my commitment to finding the most 
          effective solution for any given task. I understand that marketing, commercial content creation, 
          and application development are all interconnected and essential components for driving business success.
          </p>
          <p className='py-2 text-gray-600'>
          With over 25 years of experience, I have been marketing since 1995, creating compelling commercial content since 2008, 
          and developing websites since 2010, managing multiple e-commerce sites using CMS platforms such as WordPress. 
          My extensive experience includes working on numerous offline and online marketing events, 
          collaborating directly with clients to achieve their objectives.
          </p>
          <Link href='/#projects'>
            <p className='py-2 text-gray-600 underline cursor-pointer'>
              Check out some of my latest projects.
            </p>
          </Link>
        </div>
        <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <Image src={AboutImg} className='rounded-xl' alt='/' />
        </div>
      </div>
    </div>
  );
};

export default About;
