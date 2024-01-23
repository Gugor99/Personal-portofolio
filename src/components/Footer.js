import { Container, Row, Col } from "react-bootstrap";
import { ProgressBar } from "./ProgressBar";
import logo from '../assets/img/gabedode.new.svg';
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";

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
              <a target="_blank" href="https://it.linkedin.com/in/gabriele-canova-72aa3625b?trk=people-guest_people_search-card"><img src={navIcon1} alt="Linkedin Image" /></a>
              <a target="_blank" href="https://github.com/Gugor99"><img src={navIcon2} alt="Github Image" /></a>                
            </div>
            <p>Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
