import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import Overlay from './components/Overlay'
import ExplosionConfetti from './components/Confetti'
import Character from './components/Character'
import BackgroundBG from './components/BackgroundBG'
import Lights from './components/Lights'
import { DepthOfField, EffectComposer, Vignette } from '@react-three/postprocessing'

export default function App() {
  return (
    <>
      <Canvas dpr={1} shadows gl={{ antialias: false }} camera={{ position: [-2, 1, 6], near: 0.5, fov: 45 }}>
        <OrbitControls zoomSpeed={4} maxDistance={8} maxPolarAngle={Math.PI / 2.1} autoRotate />
        <Character rotation={[0, -2.9, 0]} scale={2.5} position={[0, -0.7, 0]} />
        <ExplosionConfetti rate={2} amount={50} enableShadows isExploding={true} />
        <Lights />
        <BackgroundBG />
        <EffectComposer>
          <DepthOfField bokehScale={10} focusRange={0.01} target={[0, 0, -0.1]} />
          <Vignette />
        </EffectComposer>
      </Canvas>
      <Overlay />
    </>
  )
}
