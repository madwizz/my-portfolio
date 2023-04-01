import React, { useState, useEffect } from 'react'

import './App.css'

import Header from './components/Header/Header'
import Main from './components/Main/Main'
import Footer from './components/Footer/Footer'

import pinkFrogTexture from './assets/textures/pinkfrog.mp4'
import discofrogTexture from './assets/textures/discofrog.mp4';

const App = () => {

  const [cubeTexture, setCubeTexture] = useState(pinkFrogTexture);
  const [bgColor, setBgColor] = useState(document.body.style.background = '#E5E5E5');
  const [textColor, setTextColor] = useState(document.body.style.color = 'black')
  const [borderRadiusColor, setBorderRadiusColor] = useState(document.body.style.borderRadius = 'black');

  const [isNightMode, setIsNightMode] = useState(false);

  const handleCubeClick = () => {
    setCubeTexture(cubeTexture === pinkFrogTexture ? discofrogTexture : pinkFrogTexture);
    setBgColor(bgColor === '#E5E5E5' ? 'black' : '#E5E5E5');
    setTextColor(textColor === 'black' ? 'white' : 'black');
    setBorderRadiusColor(borderRadiusColor === 'black' ? 'white' : 'black');
  }

  useEffect(() => {
    const date = new Date();
    const currentHour: number = date.getHours();
    setIsNightMode(currentHour >= 17 || currentHour < 6);
  }, []);

  useEffect(() => {
    if (isNightMode) {
      setBgColor('black');
      setTextColor('white');
      setBorderRadiusColor('white');
    } else {
      setBgColor('#E5E5E5');
      setTextColor('black');
      setBorderRadiusColor('black');
    }
  }, [isNightMode]);

  return (
    <div className="app" style={{ backgroundColor: bgColor, color: textColor, borderRadius: borderRadiusColor }}>
      <Header/>
      <Main handleCubeClick={handleCubeClick} bgColor={bgColor} cubeTexture={cubeTexture} />
      <Footer/>
    </div>
  )
}

export default App
