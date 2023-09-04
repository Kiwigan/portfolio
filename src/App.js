import { BrowserRouter, Routes, Route } from 'react-router-dom'
//import "bootstrap/dist/css/bootstrap.min.css";
//import "bootstrap/dist/js/bootstrap.bundle.min";

import Home from './components/Home'
import Navbar from './components/Navbar'
import About from './components/About';
import Projects from './components/Projects';
import Slider from './components/Slider';
import Contact from './components/Contact';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <section id='home' className='hero'>   
          <Home/>
        </section>
        <section id='about' className="about">
          <About/>
        </section>
        <section id='projects' className="project">
          <Projects/>
        </section>
        <section id='contact' className="contact">
          <Contact/>
        </section>
        <Footer/>

      </BrowserRouter>
      
    </div>
  );
}

export default App;
