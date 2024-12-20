import HtmlIcon from "../assets/img/html-5.svg";
import meter2 from "../assets/img/js-icon.svg";
import meter3 from "../assets/img/css-icon.svg";
import figma from "../assets/img/figma-icon.svg";
import Firebase from "../assets/img/firebase-icon.svg";
import react from "../assets/img/react-icon.svg";
import angular from "../assets/img/angular-icon.svg";
import typescript from "../assets/img/typescript-icon.svg";
import vsCode from "../assets/img/vs-codeIcon.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/skill-bg.png"
import { useTranslation } from "react-i18next";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  const [t] = useTranslation("global")

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>{t("skills.title")}</h2>
                        <p>{t("skills.intro")}</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={angular} alt="Angular Logo" />
                                <h5>Angular</h5>
                            </div>
                            <div className="item">
                                <img src={react} alt="React Logo" />
                                <h5>React JS</h5>
                            </div>
                            <div className="item">
                                <img src={typescript} alt="Typescript Logo" />
                                <h5>Typescript</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="CSS Logo" />
                                <h5>CSS</h5>
                            </div>
                            <div className="item">
                                <img src={HtmlIcon} alt="HTML Logo" />
                                <h5>HTML</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="Vanilla javascript Logo" />
                                <h5>Vanilla Javascript</h5>
                            </div>
                            <div className="item">
                                <img src={figma} alt="Figma Logo" />
                                <h5>Figma</h5>
                            </div>
                            <div className="item">
                                <img src={Firebase} alt="Firebase Logo" />
                                <h5>Firebase</h5>
                            </div>
                            <div className="item">
                                <img src={vsCode} alt="VS code Logo" />
                                <h5>VS Code</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Blurred red and grey on dark background" />
    </section>
  )
}
