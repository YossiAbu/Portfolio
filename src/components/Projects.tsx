import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import costOfLivingImg from "../assets/img/cost-of-living.png";
import legalizationInTwitterImg from "../assets/img/legalization-in-twitter.png";
import tattooLaserRemovalImg from "../assets/img/tattoo-laser-removal.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Global Cost of Living",
      description: "Cost of living comparison between different countries around the world",
      imgUrl: costOfLivingImg,
      githubUrl: 'https://github.com/YossiAbu/Global-Cost-of-Living',
    },
    {
      title: "Legalization in Twitter",
      description: "Investigating the discourse on legalization in the Twitter social network",
      imgUrl: legalizationInTwitterImg,
      githubUrl: 'https://github.com/YossiAbu/Legalization-in-Twitter',
    },
    {
      title: "Tattoo Laser Removal",
      description: "Business web application designed for a real tattoo laser removal business",
      imgUrl: tattooLaserRemovalImg,
      githubUrl: 'https://github.com/YossiAbu/WebApp',
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__bounce": ""}>
                <h2>Projects</h2>
              </div>}
            </TrackVisibility>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  {/* <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav> */}
                  <Tab.Content /*id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}*/>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    {/* <Tab.Pane eventKey="second">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane> */}
                  </Tab.Content>
                </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
