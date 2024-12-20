import AnimatedNumber from "react-animated-numbers";
import TrackVisibility from "react-on-screen";
import { useTranslation } from "react-i18next";

export const ProgressBar = () => {
const [t] = useTranslation("global")

  const achievementsList = [
    {
      metric: t("progress.exercises"),
      value: 120,
      postfix: "+",
    },
    {
      metric: t("progress.hours"),
      value: 95,
      postfix: "+",
    },
    {
      metric: t("progress.sites"),
      value: 20,
    },
    {
      metric: t("progress.year"),
      value: 1,
      postfix: "+",
    },
  ];

  return (
    <div className="achieve-box">
      {achievementsList.map((achievement, index) => (
        <TrackVisibility key={index} offset={80} partialVisibility>
          {({ isVisible }) => (
            <div className="progress-div">
              <p>{achievement.metric}</p>
              <div className="prog-num">
                <h2>
                <AnimatedNumber
                  includeComma
                  animateToNumber={parseInt(achievement.value)}
                  locale="en-US"
                  configs={(_, index) => {
                    return {
                      mass: 1,
                      friction: 100,
                      tensions: 140 * (index + 1),
                    };
                  }}
                  />
                <span>{achievement.postfix}</span>
                </h2>
              </div>
            </div>
          )}
        </TrackVisibility>
      ))}
    </div>
  );
};