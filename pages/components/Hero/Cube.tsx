import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  Preload,
  useGLTF,
  PerspectiveCamera,
} from "@react-three/drei";
import CanvasLoader from "../CanvasLoader";

function Cube() {
  const cube = useGLTF("/planet/scene.gltf");
  return (
    <mesh>
      <ambientLight intensity={2} />
      <pointLight intensity={1} />
      <primitive object={cube.scene} />
    </mesh>
  );
}

const CubeCanvas = () => {
  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [0, 0, 0], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI}
          minPolarAngle={Math.PI / 2}
        />
        <Cube />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default CubeCanvas;
