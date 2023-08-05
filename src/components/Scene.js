import { Text3D, Center } from '@react-three/drei'
import Lights from './Lights'
import BackgroundBG from './BackgroundBG'

export default function Scene(props) {
  return (
    <>
    <Center>
      <Text3D
        curveSegments={16}
        bevelEnabled
        bevelSize={0.02}
        bevelThickness={0.06}
        height={0.3}
        lineHeight={0.5}
        letterSpacing={-0.02}
        scale={0.9}
        font='/interFont.json'
        castShadow
      >
        CONFETTI
        <meshPhysicalMaterial color='orange' roughness={0.4} />
      </Text3D>
    </Center>
        <Lights />
        <BackgroundBG />
</>
  )
}
