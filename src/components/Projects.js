import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/password-site.png";
import projImg2 from "../assets/img/grochery-list.png";
import projImg3 from "../assets/img/quizzcall.png";
import projImg4 from "../assets/img/vansLife.png";
import projImg5 from "../assets/img/twimba.png";
import projImg6 from "../assets/img/tenzies.png";
import gabyCV from "../assets/docs/gabriele-canova-resume.docx";
import colorSharp from "../assets/img/skill-bg.png"
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Password Generator",
      description: "Javascript logic",
      imgUrl: projImg1,
      githubUrl: "https://github.com/Gugor99/password-generator",
      siteUrl: "https://password-generator-gaby.netlify.app/",
    },
    {
      title: "Real-time shopping list",
      description: "Firebase backend",
      imgUrl: projImg2,
      githubUrl: "https://github.com/Gugor99/shopping-list-monkey",
      siteUrl: "https://grochery-list-gaby.netlify.app/",
    },
    {
      title: "Quizzcall",
      description: "React & APIs",
      imgUrl: projImg3,
      githubUrl: "https://github.com/Gugor99/Quizzcall",
      siteUrl: "https://quizzle-react-gaby.netlify.app/",
    },
    {
      title: "VansLife",
      description: "React router & Design",
      imgUrl: projImg4,
      githubUrl: "https://github.com/Gugor99/vansLife",
      siteUrl: "https://vans-life-react-gaby.netlify.app/",
    },
    {
      title: "Twimba",
      description: "Javascript & Design",
      imgUrl: projImg5,
      githubUrl: "https://github.com/Gugor99/twimba",
      siteUrl: "https://twimba-gaby.netlify.app/",
    },
    {
      title: "Tenzies",
      description: "React & Design",
      imgUrl: projImg6,
      githubUrl: "https://github.com/Gugor99/Tenzios",
      siteUrl: "https://tenzies-reac-gaby.netlify.app/",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">My projects</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">My Documents</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <h2>Projects</h2>
                      <p>A selection of my range of work</p>
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
                    <Tab.Pane eventKey="second">
                      <h2>Documents</h2>
                      <Row>   
                        <Col className="text-center">                   
                          <p>Here is my resume that collects my skills, abilities and knowledge.</p>
                          <a
                            href={gabyCV}
                            download="Gabriele-Canova-resume.docx"
                            target="_blank"
                            rel="noreferrer">
                          <button className="download-btn">Download my CV</button>
                          </a>
                        </Col>
                        <Col className="text-center">
                          <p>Here is the certificate of participation issued by my programming course.</p>
                          <a href="https://scrimba.com/certificate/u2mmKBSx/gfrontend" rel="noreferrer" target="_blank">
                            <button className="download-btn">See my certificate</button>
                          </a>
                        </Col>
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" alt="Blurred red and grey background" src={colorSharp}></img>
    </section>
  )
}


/*
Here's the Tab Container in case you wanna add some more projects.
**include Nav, Tab with the imports
<Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
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
                    <Tab.Pane eventKey="section">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>*/