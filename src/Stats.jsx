import React, { useState, useEffect } from 'react';
import './Stats.css';

const Stats = ({ time, wpm, cpm, accuracy, onElapsedTime }) => {
  // Variables
  const [elapsedTime, setElapsedTime] = useState(time);
  const [firstFrame, setFirstFrame] = useState(true);

  // Counter
  useEffect(() => {
    setFirstFrame(false);
    const interval = setInterval(() => {
      setElapsedTime(prev => {
        if (prev <= 1) {
          clearInterval(interval);
          return 1;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [time]);

  // Format Time
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds - (mins * 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  // Progress Calculation
  const rawProgress = ((elapsedTime - 1) / time) * 100;
  const progress = firstFrame ? 100 : rawProgress;

  useEffect(() => {
    onElapsedTime(elapsedTime);
  }, [elapsedTime]);

  // Elements
  return (
    <div className="stats-container" role="region" aria-label="Live test statistics">
      {/* Timer Circle */}
      <div className="timer-circle" role="timer" aria-live="off" aria-label={`Time remaining: ${formatTime(elapsedTime)}`}>
        <svg className="timer-ring" viewBox="0 0 120 120" aria-hidden="true" focusable="false">
          <circle
            className="timer-ring-background"
            cx="60"
            cy="60"
            r="54"
          />
          <circle
            className="timer-ring-progress"
            cx="60"
            cy="60"
            r="54"
            style={{
              strokeDasharray: `${2 * Math.PI * 54}`,
              strokeDashoffset: `${2 * Math.PI * 54 * (1 - progress / 100)}`
            }}
          />
        </svg>
        <div className="timer-text" aria-hidden="true">
          {formatTime(elapsedTime)}
        </div>
      </div>

      {/* Stats Grouped Semantically */}
      <div className="stat-item" aria-label={`Speed: ${wpm} Words per Minute`}>
        <div className="stat-box" aria-hidden="true">
          <span className="stat-number">{wpm}</span>
        </div>
        <p className="stat-label" aria-hidden="true">Words/Min</p>
      </div>

      <div className="stat-item" aria-label={`Raw speed: ${cpm} Characters per Minute`}>
        <div className="stat-box" aria-hidden="true">
          <span className="stat-number">{cpm}</span>
        </div>
        <p className="stat-label" aria-hidden="true">Characters/Min</p>
      </div>

      <div className="stat-item" aria-label={`Accuracy: ${accuracy} percent`}>
        <div className="stat-box" aria-hidden="true">
          <span className="stat-number">{accuracy}</span>
        </div>
        <p className="stat-label" aria-hidden="true">Accuracy%</p>
      </div>
    </div>
  );
};

export default Stats;
