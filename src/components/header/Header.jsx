import Socials from './Socials';
import './header.css';

const Header = () => {
  return (
    <header className="header__container">
      <div>
        <h5>Hello, I'm</h5>
        <h1>Winfred Edube</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <p className="intro__text">
            I can help you build a product , feature or website. Look through some
            of my work and experience! If you like what you see and have a project
            you need coded, don’t hestiate to contact me.
          </p>
      </div>
      <div className="socials__container">
      <a href="#contact" className="cta__btn btn btn-primary">Get In Touch</a> 
      <Socials />
      </div>
      <a href="#contact" className="scroll__down">
        Scroll Down
      </a>
    </header>
  )
}

export default Header
