import atom from '../../assets/atom.png';
import css from '../../assets/css.png';
import git from '../../assets/git.png';
import html from '../../assets/html.png';
import js from '../../assets/js.png';
import mysql from '../../assets/mysql.png';
import postgres from '../../assets/postgres.png';
import rails from '../../assets/rails.png';
import redux from '../../assets/redux.png';
import ruby from '../../assets/ruby.png';
import bootstrap from '../../assets/bootstrap.png';
import scss from '../../assets/scss.png';
import jest from '../../assets/jest.png';
import './skills.css';

const icons = [
    {
        id: 1,
        image: html,
        title: "Html5"
    },
    {
        id: 2,
        image: css,
        title: "css3"
    },
    {
        id: 3,
        image: js,
        title: "Javascript"
    },
    {
        id: 4,
        image: atom,
        title: "Reactjs"
    },
    {
        id: 5,
        image: redux,
        title: "Redux"
    },
    {
        id: 6,
        image: ruby,
        title: "Ruby"
    },
    {
        id: 7,
        image: rails,
        title: "Ruby on Rails"
    },
    {
        id: 8,
        image: mysql,
        title: "Mysql"
    },
    {
        id: 9,
        image: postgres,
        title: "Postgresql"
    },
    {
        id: 10,
        image: git,
        title: "Git"
    },
    {
        id: 11,
        image: bootstrap,
        title: "Bootstrap"
    },
    {
        id: 12,
        image: scss,
        title: "Scss"
    },
    {
        id: 13,
        image: jest,
        title: "Jest"
    },
];

const Skills = () => {
  return (
    <section>
      <h2 className="title">My Skills</h2>

      <div className="skills__container">
        {
            icons.map(({id, image, title}) => {
                return (
                    <div key={id} className="skill__item">
                        <img src={image} alt={title} />
                        <p>{title}</p>
                    </div>
                );
            })
        }
      </div>
    </section>
  )
}

export default Skills
