import { useState } from 'react';
import { AiOutlineHome, AiOutlineUser, AiOutlineExperiment } from 'react-icons/ai';
import { BsBarChartSteps } from 'react-icons/bs';
import { FaTimes } from 'react-icons/fa';
import { CgMenuRound } from 'react-icons/cg';
import { BiMessageRoundedDetail } from 'react-icons/bi';
import './navbar.css';

const Navbar = () => {
  const [activeNav, setActiveNav] = useState('#home');
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <div>
      <nav className={openMenu ? 'responsive__nav' : ''}>
        <a
          href="#home"
          onClick={() => setActiveNav('#home')}
          className={activeNav === '#home' ? 'active' : ''}
        >
          <AiOutlineHome />
          <div className='nav__title'>Home</div>
        </a>
        <a
          href="#about"
          onClick={() => setActiveNav('#about')}
          className={activeNav === '#about' ? 'active' : ''}
        >
          <AiOutlineUser />
          <span className='nav__title'>About</span>
        </a>
        <a
          href="#projects"
          onClick={() => setActiveNav('#projects')}
          className={activeNav === '#projects' ? 'active' : ''}
        >
          <AiOutlineExperiment />
          <span className='nav__title'>Projects</span>
        </a>
        <a
          href="#skills"
          onClick={() => setActiveNav('#skills')}
          className={activeNav === '#skills' ? 'active' : ''}
        >
          <BsBarChartSteps />
          <span className='nav__title'>Skills</span>
        </a>
        <a
          href="#contact"
          onClick={() => setActiveNav('#contact')}
          className={activeNav === '#contact' ? 'active' : ''}
        >
          <BiMessageRoundedDetail />
          <span className='nav__title'>Contacts</span>
        </a>
        <button
          type="submit"
          onClick={toggleMenu}
          className="nav__btn close__btn"
        >
          <FaTimes />
        </button>
      </nav>
      <button type="submit" onClick={toggleMenu} className="nav__btn">
        <CgMenuRound />
      </button>
    </div>
  );
};

export default Navbar;
