import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Home, Projects, Skills, Contact } from './Pages';
import { Navbar,Particles } from './Components';
import { ToastContainer, toast } from 'react-toastify';


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


      <section id="contact">
        <Contact />
      </section>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <Navbar />
    </div>
  );
}

export default App;
