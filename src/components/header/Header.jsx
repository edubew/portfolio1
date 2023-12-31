import Socials from './Socials';
import './header.css';
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Header = () => {
  useEffect(() => {
    Aos.init({ duration: 2500 });
  }, []);
  return (
    <header id='home' className="header__container">
      <div>
        <h5>Hello, I am</h5>
        <h1>Winfred Edube</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <p data-aos="fade-up" className="intro__text">
            I can help you build a product , feature or website. Look through some
            of my work and experience! If you like what you see and have a project
            you need coded, dont hestiate to contact me.
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