import React from 'react';
import Head from 'next/head';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const resume = () => {
  return (
    <>
      <Head>
        <title>Tim | Resume</title>
        <meta
          name='description'
          content='I’m a front-end web developer specializing in building (and occasionally designing) exceptional digital experiences.'
        />
        <link rel='icon' href='/fav.png' />
      </Head>

      <div className='max-w-[940px] mx-auto p-2 pt-[120px]'>
        <h2 className='text-center'>Resume</h2>
        <div className='bg-[#d0d4d6] my-4 p-4 w-full flex justify-between items-center'>
          <h2 className='text-center'>Tim Lee</h2>
          <div className='flex'>
            {/* <a
              href='#'
              target='_blank'
              rel='noreferrer'
            >
              <FaLinkedinIn size={20} style={{ marginRight: '1rem' }} />
            </a> */}
            <a
              href='https://github.com/'
              target='_blank'
              rel='noreferrer'
            >
              <FaGithub size={20} style={{ marginRight: '1rem' }} />
            </a>
          </div>
        </div>
        <div className='text-center py-4 text-xl font-bold uppercase tracking-wider'>
          <div className='hidden sm:block'>
            <p>
              Online Marketing <span className='px-1'>|</span> Commercial Contents Creator{' '}
              <span className='px-1'>|</span> Web Development
            </p>
          </div>
          <div className='block sm:hidden'>
            <p>Online Marketing</p>
            <p className='py-2'>Web Development</p>
            <p>Commercial Contents Creator</p>
          </div>
        </div>
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

        {/* Skills */}
        <div className='text-center py-4'>
          <h5 className='text-center underline text-[18px] py-2'>Skills</h5>
          <p className='py-2'>
            <span className='font-bold'>Technical Skills</span>
            <span className='px-2'>|</span>Online Marketing
            <span className='px-2'>|</span>Photograpy
            <span className='px-2'>|</span>Videography
            <span className='px-2'>|</span>Front-End Web Developer
            <span className='px-2'>|</span> HTML
            <span className='px-2'>|</span>CSS
            <span className='px-2'>|</span>Javascript
            <span className='px-2'>|</span>React
            <span className='px-2'>|</span>Next JS
            <span className='px-2'>|</span>MongoDb
            <span className='px-2'>|</span>Firebase
            <span className='px-2'>|</span>Tailwind
            <span className='px-2'>|</span>Photoshop
            <span className='px-2'>|</span> Premiere Pro
            <span className='px-2'>|</span> After Effect
            <span className='px-2'>|</span> Illustrator
          </p>
          {/* <p className='py-2'>
            <span className='font-bold'>Amazon Web Services</span>
            <span className='px-2'>|</span>Amazon Web Services Cloud
            Practitioner
          </p> */}
        </div>

        <h5 className='text-center underline text-[18px] py-4'>
          Professional Experience
        </h5>
        {/* Experience */}
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold italic'>
            Beauty Elements
            </span>
            <span className='px-2'>|</span>Miami, FL
          </p>
          <p className='py-1 italic'>Marketing Director Front End Web Developer & Web Master (2006 - Current)</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
              Ensured comprehensive mobile responsive UI layouts with
              understanding of HTML, CSS, and JavaScript.
            </li>
            <li>
              Troubleshoot issues and concerns, configure operation and analytic
              plugins, and design changes as needed.
            </li>
            <li>
              Worked directly with a diverse client base to understand and
              implement multiple technologies and programs.
            </li>
           
            <li>
              Commercial Photography and Retouching  
            </li>
            <li>
              Commercial Videography and Editing
            </li>
            <li>
              Online Marketing using social media
            </li>
          </ul>
        </div>


        {/* Personal Experience */}
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold italic'>
              Techmedia
            </span>
            <span className='px-2'>|</span>Miami, FL
          </p>
          <p className='py-1 italic'>Marketing Manager - Market Reseach & Advetisment (1995 - 2002)</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
             Latin America Division Maketing & Sales 
            </li>
            <li>
              Branch Manager in Buenos Aires Argentina (1995 - 1998)
            </li>
            <li>
              Marketing Director in Miami Florida (1998 - 2002)
            </li>
          </ul>
        </div>

        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold italic'>
              Samsung Electronics
            </span>
            <span className='px-2'>|</span>Korea, Argentina
          </p>
          <p className='py-1 italic'>Assistant Manager - Market Reseach & Sale (1991 - 1995)</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
              Information & Telecommunication system Hardware Regional Sale & Maketing 
            </li>
            <li>
            Regional branch assistant Sales Manager in Buenos Aires Argentina  
            </li>
          </ul>
        </div>

        {/*  */}
        <h5 className='text-center underline text-[18px] py-4'>
          Other Professional Experience
        </h5>
      
        {/* Experience */}
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold'>MeetBuyer.com, FL</span>
            <span className='px-2'>|</span>Miami, FL
          </p>
          <p className='py-1 italic'>Fonder / CEO (2003 – 2004)</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
              The concept is to connect the manufacture in China or Korea to
              Latin America buyers.
            </li>
            <li>
              This site got About 7000 manufactures and 13000 Latin America buyers
            </li>
            <li>
              Site management and Customer Service 
            </li>
           
          </ul>
        </div>
      </div>
    </>
  );
};

export default resume;
