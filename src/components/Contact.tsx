import TrackVisibility from 'react-on-screen';
import emailIcon from '../assets/img/email.png';  
import linkedinIcon from '../assets/img/linkedin.png';

export const Contact = () => {
  return (
    <section id="contact" className='contact'>
        <TrackVisibility>
            {({ isVisible }) =>
            <div className={isVisible ? "animate__animated animate__bounce": ""}>
                <p className="section__text__p1">Get in Touch</p>
                <h1 className="title">Contact Me</h1>            
            </div>}
        </TrackVisibility>
      <div className="contact-info-upper-container">
        <div className="contact-info-container">
          <img
            src={emailIcon}
            alt="Email icon"
            className="icon contact-icon email-icon"
          />
          <p><a href="mailto:YossiAbu6590@gmail.com">YossiAbu6590@gmail.com</a></p>
        </div>
        <div className="contact-info-container">
          <img
            src={linkedinIcon}
            alt="LinkedIn icon"
            className="icon contact-icon linkedin-icon"
          />
          <p><a href="https://www.linkedin.com/in/yossi-abu-/">LinkedIn</a></p>
        </div>
      </div>
    </section>
  );
};
