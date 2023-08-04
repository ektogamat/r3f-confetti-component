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
        <h1>R3F CONFETTI COMPONENT</h1>
        <p>Adds confetti explosions to your projects with many customization options. <a href="https://gist.github.com/ektogamat/f810b36ea0d990fe480ed2d634380c8f" target="_blank">Download it here.</a></p>
        <p>
          Created by Anderson Mancini.{' '}
          <a href="https://market.pmnd.rs/model/korrigan-wolf" target="">
            Model credits
          </a>
          .{' '}
          <a href="https://skybox.blockadelabs.com/" target="_blank">
            Blockade Labs Envmap
          </a>
          .
        </p>
      </div>
    </>
  )
}
