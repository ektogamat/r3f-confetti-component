export default function Lights() {
  return (
    <>
      <directionalLight castShadow intensity={1} position={[-9, 20, -6]} />
      <ambientLight intensity={0.5} />
    </>
  )
}
