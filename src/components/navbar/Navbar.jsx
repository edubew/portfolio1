import { useState } from 'react';
import { AiOutlineHome, AiOutlineUser, AiOutlineExperiment } from 'react-icons/ai';
import { BsBarChartSteps } from 'react-icons/bs';
import { BiMessageRoundedDetail } from 'react-icons/bi';
import './navbar.css';

const Navbar = () => {
    const [activeNav, setActiveNav] = useState('#home');
  return (
    <nav>
       <a
        href="#home"
        onClick={() => setActiveNav('#home')}
        className={activeNav === '#home' ? 'active' : ''}
      >
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        onClick={() => setActiveNav('#about')}
        className={activeNav === '#about' ? 'active' : ''}
      >
        <AiOutlineUser />
      </a>
      <a
        href="#skills"
        onClick={() => setActiveNav('#skills')}
        className={activeNav === '#skills' ? 'active' : ''}
      >
        <BsBarChartSteps />
      </a>
      <a
        href="#projects"
        onClick={() => setActiveNav('#projects')}
        className={activeNav === '#projects' ? 'active' : ''}
      >
        <AiOutlineExperiment />
      </a>
      <a
        href="#contact"
        onClick={() => setActiveNav('#contact')}
        className={activeNav === '#contact' ? 'active' : ''}
      >
        <BiMessageRoundedDetail />
      </a>
    </nav>
  )
}

export default Navbar
