import React from 'react';

import './Project.css'

import CubeCanvas from '../CubeCanvas/CubeCanvas'

interface ProjectProps {
  handleCubeClick: () => void;
  bgColor: string;
  cubeTexture: string;
}

const Project: React.FC<ProjectProps> = ({ handleCubeClick, bgColor, cubeTexture }) => {
  return (
    <section className='project'>
      <div className='project-info'>
        <h1 className='project-info__title'>oh my fucking god</h1>
        <p className='project-info__description'>
          Look at this fucking frog, it's running and shit, you think this is it, click on it, i dare you to click on it, yeah, baby, that's right, this shit is fire
        </p>
        <button className='project-info__link-button'>Click to check it</button>
      </div>
      {/* <div className='project-image'>
        <CubeCanvas handleCubeClick={handleCubeClick} bgColor={bgColor} cubeTexture={cubeTexture} />
      </div> */}
    </section>
  )
}

export default Project