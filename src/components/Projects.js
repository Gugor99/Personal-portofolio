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
import { useTranslation } from "react-i18next";
import { useTransition } from "react";

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

  const [t] = useTranslation("global")

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
                      <Nav.Link eventKey="first">{t("projects.tab-project")}</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">{t("projects.tab-docs")}</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <h2>{t("projects.proj-title")}</h2>
                      <p>{t("projects.proj-intro")}</p>
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
                      <h2>{t("projects.doc-title")}</h2>
                      <Row>   
                        <Col className="text-center">                   
                          <p>{t("projects.CV-intro")}</p>
                          <a
                            href={gabyCV}
                            download="Gabriele-Canova-resume.docx"
                            target="_blank"
                            rel="noreferrer">
                          <button className="download-btn">{t("projects.CV-btn")}</button>
                          </a>
                        </Col>
                        <Col className="text-center">
                          <p>{t("projects.certificate-intro")}</p>
                          <a href="https://scrimba.com/certificate/u2mmKBSx/gfrontend" rel="noreferrer" target="_blank">
                            <button className="download-btn">{t("projects.certificate-btn")}</button>
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
