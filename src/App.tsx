import React, { useState } from 'react'

import './App.css'

import Header from './components/Header/Header'
import Main from './components/Main/Main'

import pinkFrogTexture from './assets/textures/pinkfrog.mp4'
import discofrogTexture from './assets/textures/discofrog.mp4';

const App = () => {

const [cubeTexture, setCubeTexture] = useState(pinkFrogTexture);
const [bgColor, setBgColor] = useState(document.body.style.background = '#E5E5E5');
const [textColor, setTextColor] = useState(document.body.style.color = 'black')
const [borderRadiusColor, setBorderRadiusColor] = useState(document.body.style.borderRadius = 'black');

const handleCubeClick = () => {
  setCubeTexture(cubeTexture === pinkFrogTexture ? discofrogTexture : pinkFrogTexture);
  setBgColor(bgColor === '#E5E5E5' ? 'black' : '#E5E5E5');
  setTextColor(textColor === 'black' ? 'white' : 'black');
  setBorderRadiusColor(borderRadiusColor === 'black' ? 'red' : 'black');
}

  return (
    <div className="app" style={{ backgroundColor: bgColor, color: textColor, borderRadius: borderRadiusColor }}>
      <Header/>
      <Main handleCubeClick={handleCubeClick} bgColor={bgColor} cubeTexture={cubeTexture} />
    </div>
  )
}

export default App
