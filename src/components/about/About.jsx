import winnie from "../../assets/winnie.png";
import Resume from '../../assets/Resume.pdf';
import './about.css';

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
            I am a proactive graduate in Business and Information Technology,
            equipped with a solid foundation in web development and networking
            through my past project engagements. As I actively pursue employment
            opportunities, I am dedicatedly investing my time in further
            expanding my skill set in software development.Currently, I am
            enrolled at Microverse, a renowned remote software development
            school recognized for its innovative teaching approach involving
            pair programming and immersive real-world projects.<br/><br/>My goal is to
            apply my evolving software development skills to tech companies with
            a strong sustainability focus, leveraging my education, experience,
            and ongoing learning for impactful contributions in a dynamic tech
            environment.
          </p>
          <a href={Resume} download className="resume btn btn-primary">Download Resume</a>
        </div>
      </div>
    </section>
  );
};

export default About;
