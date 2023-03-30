import React, { useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import Cube from '../Cube/Cube';
import './CubeCanvas.css'

interface CubeCanvasProps {
  handleCubeClick: () => void;
  bgColor: string;
  cubeTexture: string;
}

const CubeCanvas: React.FC<CubeCanvasProps> = ({ handleCubeClick, bgColor, cubeTexture }: CubeCanvasProps) => {

  const [canvasSize, setCanvasSize] = useState('450px');

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width <= 321) {
        setCanvasSize('216px');
      } else if (width <= 452) {
          setCanvasSize('250px');
      } else if (width <= 555) {
        setCanvasSize('350px');
      } else {
        setCanvasSize('450px');
      }
    }

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize)
  }, []);

  return (
    <Canvas style={{ width: canvasSize, height: '491px' }}>
      {/* <ambientLight intensity={0.5} />
      <spotLight position={[10, 15, 10]} angle={0.3} />
      <Cube cubeTexture={cubeTexture} onClick={handleCubeClick}/> */}
    </Canvas>
  );
}

export default CubeCanvas;