import { Container, Row, Col } from "react-bootstrap";
import logo from '../assets/img/gabedode.new.svg';
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon4.svg";

/*<ProgressBar />*/

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a target="_blank" rel="noreferrer" href="https://it.linkedin.com/in/gabriele-canova-72aa3625b?trk=people-guest_people_search-card"><img src={navIcon1} alt="Linkedin Logo" /></a>
              <a target="_blank" rel="noreferrer" href="https://github.com/Gugor99"><img src={navIcon2} alt="Github Logo" /></a>                
            </div>
            <p>Copyright 2023. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
