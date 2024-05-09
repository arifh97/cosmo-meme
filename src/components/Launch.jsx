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
      <h3 className='fw-semibold mb-3 mb-lg-4 text-white fw-semibold' data-aos="fade-up" data-aos-duration="1600" data-aos-delay="" data-aos-offset="">Launch In</h3>
      <div className="launch-wrap d-grid align-items-center gap-3 gap-md-4">
        {Object.entries(timeLeft).map(([unit,value], index) => (
          <div className="launch-item" key={index}  data-aos="fade-up" data-aos-duration={`1${index+2}00`} data-aos-delay={`${index+1}00`} data-aos-offset="">
            <span className='time d-block mb-2'>{value}</span>
            <span className="d-block text-uppercase">{unit}</span>
          </div>
        ))}
      </div>
      <p className='mb-3 mb-md-4 fw-semibold' data-aos="fade-up" data-aos-duration="1800" data-aos-delay="" data-aos-offset="">Join with Telegram or Twitter now </p>
      <Social />
    </div>
  )
}
