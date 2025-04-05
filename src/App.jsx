import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Home, Projects, Skills, Contact } from './Pages';
import { Navbar } from './Components';

function App() {
  return (
    <div className="text-light Container-Portfolio">
      <section id="Home">
        <Home />
      </section>

      <section id="skills">
        <Skills />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="contact">
        <Contact />
      </section>

      <Navbar/>
    </div>
  );
}

export default App;