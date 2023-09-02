import winnie from "../../assets/winnie.png";
import Resume from "../../assets/Resume.pdf";
import "./about.css";

const About = () => {
  return (
    <section>
      <h2 className="title">About Me</h2>

      <div className="about__container">
        <div className="about__image">
          <img src={winnie} alt="Edube" />
        </div>
        <div className="about__content">
          <p>
            I'm Edube, an enthusiatic software developer actively honing my
            skills and pursuing growth at Microverse(a remote pair-programming
            school). While I lack formal job espeience, my passion for
            technology drives me to embrace challenges daily. With a solid
            foundation in Software Development, I'm well-versed in Html5, css3,
            javascript, react, ruby, mysql, ruby on rails and redux. What sets
            me apart is my proactive approach to addressing challenges and
            adaptability to indusrty shifts. I thrive in collaborative settings
            an I'm eager to contibute to dynamic teams.
            <br />
            <br />
            Seeking an opportunity to translate my knowledge into real-world
            impact, I am prepared to learn, contibute, and create with
            determination. Let us connect to explore how I can bring value to
            your projects.
          </p>
          <a href={Resume} download className="resume btn btn-primary">
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
