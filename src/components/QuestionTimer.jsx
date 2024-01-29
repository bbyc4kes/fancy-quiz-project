import { useEffect, useState, useRef } from "react";

function QuestionTimer({ timeout, onTimeout, mode }) {
  const [remainingTime, setRemainingTime] = useState(timeout);
  // const intervalRef = useRef(null);

  useEffect(() => {
    let timerId;

    const startTimer = () => {
      const startTime = Date.now();

      const updateRemainingTime = () => {
        const elapsed = Date.now() - startTime;
        const newRemainingTime = Math.max(0, timeout - elapsed);
        setRemainingTime(newRemainingTime);

        if (newRemainingTime > 0) {
          timerId = setTimeout(updateRemainingTime, 100);
        } else {
          onTimeout();
        }
      };

      updateRemainingTime();
    };

    startTimer();

    return () => {
      clearTimeout(timerId);
    };
  }, [onTimeout, timeout]);

  return (
    <progress
      id="question-time"
      max={timeout}
      value={remainingTime}
      className={mode}
    />
  );
}

export default QuestionTimer;
