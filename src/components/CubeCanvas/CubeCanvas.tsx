import React from 'react';
import { Canvas } from '@react-three/fiber';
import Cube from '../Cube/Cube';
import './CubeCanvas.css'

interface CubeCanvasProps {
  handleCubeClick: () => void;
  bgColor: string;
  cubeTexture: string;
}

const CubeCanvas: React.FC<CubeCanvasProps> = ({ handleCubeClick, bgColor, cubeTexture }: CubeCanvasProps) => {

  return (
    <Canvas style={{ width: '450px', height: '491px' }}>
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 15, 10]} angle={0.3} />
      <Cube cubeTexture={cubeTexture} onClick={handleCubeClick}/>
    </Canvas>
  );
}

export default CubeCanvas;