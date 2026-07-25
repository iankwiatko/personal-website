
import './App.css'

function App() {
  return (
    <main className="page">
      <section className="hero">
        <p className="eyebrow">Hello, I’m</p>
        <h1>Ian Kwiatkowski</h1>
        <p className="intro">
          This is my initial personal website!
        </p>
      </section>

      <section className="details" id="about">
        <article>
          <h2>About me</h2>
          <p>
            I'm a designer and developer who loves turning ideas into elegant,
            user-friendly websites.
          </p>
        </article>

        <article id="contact">
          <h2>Contact</h2>
        </article>
      </section>
    </main>
  )
}
export default App
