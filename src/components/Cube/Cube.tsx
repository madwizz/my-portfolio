import * as THREE from 'three';
import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import './Cube.css'

interface CubeProps {
  cubeTexture: string;
  onClick: () => void;
}

const Cube: React.FC<CubeProps> = ({ cubeTexture, onClick }) => {
  const mesh = useRef<THREE.Mesh>(null!);
  const video = document.createElement('video');
  video.src = cubeTexture;
  video.crossOrigin = 'anonymous';
  video.loop = true;
  video.muted = true;
  video.play();

  const videoTex = new THREE.VideoTexture(video);
  videoTex.minFilter = THREE.LinearFilter;
  videoTex.magFilter = THREE.LinearFilter;
  videoTex.format = THREE.RGBAFormat;

  useFrame(() => {
    videoTex.needsUpdate;
    mesh.current.rotation.x += 0.01;
    mesh.current.rotation.y += 0.01;
  });

  return (
    <mesh ref={mesh} onClick={onClick}>
      <boxGeometry args={[3, 3, 3]} />
      <meshStandardMaterial attach="material" map={videoTex} />
    </mesh>
  );
};

export default Cube;