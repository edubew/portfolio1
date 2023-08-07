import React from 'react';
import {BsLinkedin, BsGithub, BsTwitter} from 'react-icons/bs';
import {FaAngellist} from 'react-icons/fa';

const Socials = () => {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/winfred-edube/"
        target="_blank"
        rel="norefferer noreferrer">
        <BsLinkedin />
      </a>
      <a href="https://github.com/edubew" target="_blank" rel="norefferer noreferrer">
        <BsGithub />
      </a>
      <a
        href="https://twitter.com/edube_winne"
        target="_blank"
        rel="norefferer noreferrer">
        <BsTwitter />
      </a>
      <a
        href="https://wellfound.com/u/winfred-edube"
        target="_blank"
        rel="norefferer noreferrer">
        <FaAngellist />
      </a>
    </div>
  );
}

export default Socials;
