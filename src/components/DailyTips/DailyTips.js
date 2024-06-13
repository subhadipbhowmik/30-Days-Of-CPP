import React, { useState, useEffect } from 'react';
import tips from '../../data/dailyTips.json';
import './DailyTips.css';

const DailyTips = () => {
  const [tip, setTip] = useState('');
  const [fadeClass, setFadeClass] = useState('');

  useEffect(() => {
    const getRandomTip = () => {
      return tips[Math.floor(Math.random() * tips.length)];
    };

    const randomTip = getRandomTip();
    setTip(randomTip);
    setFadeClass('fade-in');

    const interval = setInterval(() => {
      setFadeClass('fade-out');
      setTimeout(() => {
        setTip(getRandomTip());
        setFadeClass('fade-in');
      }, 500);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`daily-tip ${fadeClass}`}>
      <h3>Daily Tip</h3>
      <p>{tip}</p>
    </div>
  );
};

export default DailyTips;


