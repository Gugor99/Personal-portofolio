import { Col } from "react-bootstrap";
import navIcon1 from '../assets/img/eye.svg';
import navIcon2 from '../assets/img/nav-icon4.svg';

export const ProjectCard = ({ title, description, imgUrl, githubUrl, siteUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <div className="social-icon site-icon">
                <a target="_blank" rel="noreferrer" href={siteUrl}><img src={navIcon1} alt="Linkedin Logo" /></a>
                <a target="_blank" rel="noreferrer" href={githubUrl}><img src={navIcon2} alt="Github Logo" /></a>                
              </div>
        </div>
      </div>
    </Col>
  )
}
