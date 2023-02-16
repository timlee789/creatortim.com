import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import ghanabraidImg from '../public/assets/projects/ghanabraid.jpg';
import bijouxhairImg from '../public/assets/projects/bijouxhair.jpg'
import xpressionImg from '../public/assets/projects/4xxpression.jpg'
import behairstyleImg from '../public/assets/projects/behairstyle.jpg'
import ProjectItem from './ProjectItem';

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
          Projects
        </p>
        <h2 className='py-4'>What I&apos;ve Built</h2>
        <div className='grid md:grid-cols-2 gap-8'>
          <ProjectItem
            title='Store Online Event App'
            backgroundImg={ghanabraidImg}
            projectUrl='/ghanabraid'
            tech='React JS'
          />
          <ProjectItem
            title='Company Web'
            backgroundImg={bijouxhairImg}
            projectUrl='/bijouxhair'
            tech='Wordpress'

          />
          <ProjectItem
            title='Photo Contest App'
            backgroundImg={xpressionImg}
            projectUrl='/4xxpression'
            tech='next JS'

          />
          <ProjectItem
            title='Flutter App'
            backgroundImg={behairstyleImg}
            projectUrl='/behairstyle'
            tech='Flutter'

          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
