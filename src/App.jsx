import Header from './components/header/Header';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Contact from './components/contacts/Contact';
import Navbar from './components/navbar/Navbar';
import Projects from './components/projects/Projects';

function App() {

  return (
    <div>
      <Navbar />
      <Header />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </div>
  )
}

export default App
