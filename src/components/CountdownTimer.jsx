import { useState, useEffect } from 'react';
import styles from './styles/countdowntimer.module.css';

function CountdownTimer({ endDate }) {
  const calculateTimeLeft = () => {
    const difference = new Date(endDate) - new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const formatTime = (value) => {
    return value.toString().padStart(2, '0');
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsClient(true);
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  if (isClient) {
    if (
      timeLeft.days > 0 ||
      timeLeft.hours > 0 ||
      timeLeft.minutes > 0 ||
      timeLeft.seconds > 0
    ) {
      return (
        <div className={styles.main}>
          {timeLeft.days > 0 && (
            <div className={styles.timer}>
              <p>{formatTime(timeLeft.days)}</p>
              <span>days</span>
            </div>
          )}
          {timeLeft.days > 0 && ':'}
          <div className={styles.timer}>
            <p>{formatTime(timeLeft.hours)}</p>
            <span>hrs</span>
          </div>
          :
          <div className={styles.timer}>
            <p>{formatTime(timeLeft.minutes)}</p>
            <span>mins</span>
          </div>
          :
          <div className={styles.timer}>
            <p>{formatTime(timeLeft.seconds)}</p>
            <span>secs</span>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }

  return null;
}

export default CountdownTimer;
