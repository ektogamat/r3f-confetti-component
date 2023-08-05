export default function Overlay() {
  return (
    <>
      <h2>ANDERSON MANCINI.DEV</h2>

      <button
        className="ctaButton contact"
        onClick={() => {
          window.open('https://andersonmancini.dev', 'tab')
        }}>
        GET IN TOUCH
      </button>

      <div className="container">
        <h1>React three fiber component</h1>
        <p>Adds confetti explosions to your projects with many customization options. <a href="https://github.com/ektogamat/r3f-confetti-component" target="_blank">Download it here.</a></p>
        <p>
          Creeated by Anderson Mancini and Romain Herault.
        </p>
      </div>
    </>
  )
}
