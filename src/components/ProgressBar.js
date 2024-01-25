import { Row, Col } from "react-bootstrap";
import AnimatedNumber from "react-animated-numbers";
import TrackVisibility from "react-on-screen";

export const ProgressBar = () => {


  const achievementsList = [
    {
      metric: "Completed exercises",
      value: 120,
      postfix: "+",
    },
    {
      metric: "Hours courses",
      value: 95,
      postfix: "+",
    },
    {
      metric: "Sites",
      value: 20,
    },
    {
      metric: "Year",
      value: 1,
      postfix: "+",
    },
  ];

  return (
    <Row className="achieve-box">
      {achievementsList.map((achievement, index) => (
        <TrackVisibility key={index} offset={80} partialVisibility>
          {({ isVisible }) => (
            <Col>
              <p>{achievement.metric}</p>
              <AnimatedNumber
                value={isVisible ? achievement.value : 0}
                speed={1}
                decimals={0}
              />
              {achievement.postfix && <span>{achievement.postfix}</span>}
            </Col>
          )}
        </TrackVisibility>
      ))}
    </Row>
  );
};
