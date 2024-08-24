// import React from 'react';
import './App.css';
import { NavBar } from './components/NavBar';
import { About } from './components/About';
import { Home } from './components/Home';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <div className='home-about-wrapper'>
        <Home/>
        <About/>
      </div>
      <Skills/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;


