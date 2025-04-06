import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Home, Projects, Skills, Contact } from './Pages';
import { Navbar,Particles } from './Components';


function App() {
  return (
    <div className="text-light Container-Portfolio" style={{ position: 'relative', overflow: 'hidden' }}>
      <Particles />

      <section id="Home">
        <Home />
      </section>

      <section id="skills">
        <Skills />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="otra" className='d-flex justify-content-center align-items-center' style={{ minHeight: '100vh', paddingTop: '100px' }}>
  <h2>Otra Sección</h2>
</section>

      <section id="contact">
        <Contact />
      </section>

      <Navbar />
    </div>
  );
}

export default App;
