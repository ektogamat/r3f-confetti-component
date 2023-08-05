export default function Lights() {
  return (
    <>
      <directionalLight castShadow 
      shadow-mapSize={[256, 256]}
      shadow-camera-far={50}
      shadow-camera-left={-4}
      shadow-camera-right={4}
      shadow-camera-top={4}
      shadow-camera-bottom={-4}
      intensity={1} position={[-9, 20, 6]} />
      <ambientLight intensity={0.4} />
    </>
  )
}
