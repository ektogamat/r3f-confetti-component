import { Environment, Plane } from '@react-three/drei'

export default function BackgroundBG() {
  return (
    <>
      <Environment
        // preset="apartment"
        files={'/bg.exr'}
        background
        near={1}
        far={1000}
        resolution={512}
        ground={{
          height: 5, // Height of the camera that was used to create the env map (Default: 15)
          radius: 60, // Radius of the world. (Default 60)
          scale: 10 // Scale of the backside projected sphere that holds the env texture (Default: 1000)
        }}></Environment>
      <Plane receiveShadow rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.65, 0]} scale={20}>
        <shadowMaterial opacity={0.4} />
      </Plane>
    </>
  )
}
