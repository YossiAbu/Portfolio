import { useActiveLink } from "../hooks/useActiveLink";
import { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/header-img.svg";
import 'animate.css';
import TrackVisibility from "react-on-screen";

export const Home = () => {
  const { onUpdateActiveLink } = useActiveLink();
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = ["Software Engineer", "Full Stack Developer","Data Scientist"];
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 10);
  const period = 500;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => clearInterval(ticker);
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);
    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  };

  return (
    <section className="home" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__slideInUp" : ''}>
                  <span className="tagline">Welcome to my Portfolio</span>
                  <h1>
                    {`Hi, I'm a Junior `}
                    <span className="wrap">{text}</span>
                  </h1>
                  <p>   
                    Holding a B.Sc. in Software Engineering, 
                    specializing in Data Science,
                    and experience in full-stack development.
                    <br/>
                    I am eager to secure my first professional role 
                    where I can leverage my skills and grow within a dynamic environment.
                  </p>
                  <button onClick={() => onUpdateActiveLink('contact')}>
                    Let's Connect <ArrowRightCircle size={25} />
                  </button>
                </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={headerImg} alt="Header image" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};
