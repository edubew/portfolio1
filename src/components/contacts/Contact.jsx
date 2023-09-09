import { MdOutlineEmail } from 'react-icons/md';
import { BsLinkedin, BsWhatsapp } from 'react-icons/bs';
import { useRef } from 'react';
import emailjs from 'emailjs-com';
import './contacts.css';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_c2socvm', 'template_qymluc8', form.current, '5V6ODEjz0vJjyEHbp')

    e.target.reset();
  };

  return (
    <section  id='contact'>
      <h2 className="title">Get In Touch</h2>

      <div className="contacts__container">
      <div className="contact__cards">
        <div className="contact__option">
        <article>
            <MdOutlineEmail className="contact__icon" />
            <h4>Email</h4>
            <h5>edubew98@gmail.com</h5>
            <a href="mailto:edubew98@gmail.com" target="_blank" rel="norefferer noreferrer">Send a message</a>
          </article>
        </div>
        <div className="contact__option">
        <article>
            <BsLinkedin className="contact__icon" />
            <h4>LinkedIn</h4>
            <h5>Winfred Edube</h5>
            <a href="mailto:edubew98@gmail.com" target="_blank" rel="norefferer noreferrer">Send a message</a>
          </article>
        </div>
        <div className="contact__option">
        <article>
            <BsWhatsapp className="contact__icon" />
            <h4>WhatsApp</h4>
            <h5>+254718595043</h5>
            <a href="https://api.whatsapp.com/send?phone=+254718595043" target="_blank" rel="norefferer noreferrer">
              Send a message
            </a>
          </article>
        </div>  
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input
            type="text"
            name="email"
            placeholder="Your Email"
            required
          />
          <textarea name="message" rows="7" placeholder="Your Message" required></textarea>
          <button type="submit" className="btn btn-primary">Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
