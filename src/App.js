import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Overlay from "./components/Overlay";
import ExplosionConfetti from "./components/Confetti";
import Scene from "./components/Scene";
import { useRef } from "react";

export default function App() {
  const ref = useRef();
  return (
    <>
      <Canvas
        dpr={1}
        shadows
        gl={{ antialias: false }}
        camera={{ position: [0, -0.3, 6], near: 0.5, fov: 45 }}
      >
        <OrbitControls
          zoomSpeed={4}
          minDistance={4}
          maxDistance={8}
          maxPolarAngle={Math.PI / 2.0}
        />
        <ExplosionConfetti
          ref={ref}
          rate={2}
          fallingHeight={9}
          amount={50}
          enableShadows
          isExploding
        />
        <Scene />
      </Canvas>
      <Overlay />
    </>
  );
}
