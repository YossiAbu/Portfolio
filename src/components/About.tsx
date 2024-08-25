import React from 'react';
import profileImg from '../assets/img/profile-img.png';
import linkdeinIcon from '../assets/img/linkdein-icon.svg';
import gitImg1 from '../assets/img/github2.png';
import TrackVisibility from 'react-on-screen';

export const About = () => {
  const handleDownloadCV = () => {
    window.open(`${process.env.PUBLIC_URL}/CV.pdf`, '_blank');
  };

  const handleContactInfo = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="about" className="about">
      <div className="section__content-container">
        <div className='about-content-wrapper'>
          <div className="section__text">
            <p className="section__text__p1">Hello, I'm</p>
            <h1 className="title">Yossi Abu</h1>
            <p className="section__text__p2">Software Engineer</p>
          </div>
          <div className="btn-container">
            <button className="btn-global" onClick={handleDownloadCV}>
              Download CV
            </button>
            <button className="btn-global" onClick={handleContactInfo}>
              Contact Info
            </button>
          </div>
          <div id="socials-container">
            <img
              src={linkdeinIcon}
              alt="My LinkedIn profile"
              className="icon"
              onClick={() => window.location.href='https://www.linkedin.com/in/yossi-abu-/'}
            />
            <img
              src={gitImg1}
              alt="My Github profile"
              className="icon github-icon"
              onClick={() => window.location.href='https://github.com/YossiAbu'}
            />
          </div>
        </div>
        <div className="about-me-text">
          <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__slideInUp": ""}>
                  <h1>About Me</h1>
                  <p id='about-text'>
                  I’m a software engineer who loves diving into challenges 
                  and finding solutions with a keen attention to detail.
                  <br/>
                  Driven by curiosity and a genuine passion for teamwork, I enjoy sharing ideas and growing together.
                  I’m always ready to help where I can and eager to learn new things.
                  <br/>
                  I adapt quickly to new tools and approaches, 
                  and no matter how tough things get, I stay focused on delivering my best work on time.
                  </p>   
                </div>}
          </TrackVisibility>

        </div>
      </div>
      <div className="section__pic-container">
        <img src={profileImg} alt="Yossi Abu's profile picture" />
      </div>
    </section>
  );
};
