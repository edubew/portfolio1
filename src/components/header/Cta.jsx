import Resume from '../../assets/Resume.pdf';

const Cta = () => {
  return (
    <div className="cta">
      <a href={Resume} download className="btn">Download Resume</a>
      <a href="#contact" className="btn btn-primary">Lets Talk</a> 
    </div>
  );
}

export default Cta;
