import React from 'react'
import Socials from './Socials';
import Cta from './Cta';
import './header.css';

const Header = () => {
  return (
    <header>
      <div className=".container header__container">
        <h5>Hello, I'm</h5>
        <h1>Winfred Edube</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <p className="intro__text">
            I can help you build a product , feature or website. Look through some
            of my work and experience! If you like what you see and have a project
            you need coded, don’t hestiate to contact me.
          </p>
      </div>
      <Socials />
      <Cta />
      <a href="#contact" className="scroll__down">
        Scroll Down
      </a>
    </header>
  )
}

export default Header
