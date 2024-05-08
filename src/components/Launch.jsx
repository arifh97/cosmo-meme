import { useState, useEffect } from 'react'
import Social from './Social'

export default function Launch({ className }) {
  const endDate = "2024-06-18";
  const calculateTimeLeft = () => {
    const difference = +new Date(endDate) - +new Date();
    let timeLeft = {};
    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearTimeout(timer);
  });

  return (
    <div className={`launch text-center ${className}`}>
      <h3 className='fw-semibold mb-3 mb-md-4 text-white'>Launch In</h3>
      <div className="launch-wrap d-flex align-items-center justify-content-center gap-3 gap-md-4">
        {Object.entries(timeLeft).map(([unit,value], index) => (
          <div className="launch-item" key={index}>
            <span className='time d-block'>{value}</span>
            <span className="d-block">{unit}</span>
          </div>
        ))}
      </div>
      <p>Join with Telegram or Twitter now </p>
      <Social />
    </div>
  )
}
