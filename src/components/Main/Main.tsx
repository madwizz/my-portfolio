import React from 'react'

import Project from '../Project/Project'
import Me from '../Me/Me'

import './Main.css'

interface MainProps {
  handleCubeClick: () => void;
  bgColor: string;
  cubeTexture: string;
}

const Main = ({ handleCubeClick, bgColor, cubeTexture }: MainProps) => {

  return (
    <section className='main'>
      <Project handleCubeClick={handleCubeClick} bgColor={bgColor} cubeTexture={cubeTexture} />
      <Me/>
    </section>
  )
}

export default Main