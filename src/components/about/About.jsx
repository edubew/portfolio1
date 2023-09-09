import winnie from "../../assets/winnie.png";
import Resume from "../../assets/Resume.pdf";
import "./about.css";

const About = () => {
  return (
    <section id='about'>
      <h2 className="title">About Me</h2>

      <div className="about__container">
        <div className="about__image">
          <img src={winnie} alt="Edube" />
        </div>
        <div className="about__content">
          <p>
            I am a software developer who is passionate about learning and
            growing in my field. My love for development started back in college
            when I had a chance encounter with a peer speaker at an ICT
            conference.This encounter got me super excited about coding. Driven
            by this newfound passion and a desire to broaden my horizons beyond
            HTML and CSS, I enrolled at Microverse, a remote programming school
            that uses collaboration and real-world projects to teach
            development, and it has opened up a whole new world for me.Ever
            since, I have been on a relentless pursuit of knowledge. I find joy
            in solving complex problems and creating user-friendly applications.I am
            dedicated to keeping pace with the ever-evolving world of
            technology. I see every challenge as an opportunity to learn and
            grow. I thrive in collaborative settings and I am eager to contibute to dynamic teams.
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
