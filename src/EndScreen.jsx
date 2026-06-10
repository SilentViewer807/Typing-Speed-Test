import React from "react";
import "./EndScreen.css";

const EndScreen = ({ wpm, cpm, accuracy, time, onRetakeTest }) => {
  // Time Label
  const getTimeLabel = (seconds) => {
    if (seconds < 60) {
      return `${seconds} second`;
    } else {
      const minutes = seconds / 60;
      return `${minutes} minute`;
    }
  };

  // Speed Level
  const getSpeedLevel = (wpm) => {
    if (wpm < 25) return "slow";
    if (wpm < 40) return "below average";
    if (wpm < 60) return "average";
    if (wpm < 80) return "above average";
    if (wpm < 105) return "fast";
    if (wpm < 130) return "lightning fast";
    return "abnormally fast";
  };

  // Get Stats
  const finalWPM = Math.round((wpm * accuracy) / 100);
  const finalCPM = Math.round((cpm * accuracy) / 100);
  const timeLabel = getTimeLabel(time);
  const speedLevel = getSpeedLevel(finalWPM);

  return (
    <div className="endscreen-container" role="region" aria-label="Test Results Summary">
      {/* Header */}
      <header className="header-container">
        <h1>Here's your results for the {timeLabel} test</h1>
      </header>

      {/* Results Container for screen readers */}
      <div style={{
        position: 'absolute',
        width: '1px',
        height: '1px',
        padding: '0',
        margin: '-1px',
        overflow: 'hidden',
        clip: 'rect(0, 0, 0, 0)',
        border: '0'
      }}>
        <p>Your words speed was {wpm} per minute with an accuracy of {accuracy} percent, resulting in a final score of {finalWPM} words per minute.</p>
        <p>Your character speed was {cpm} per minute with an accuracy of {accuracy} percent, resulting in a final score of {finalCPM} characters per minute.</p>
      </div>

      {/* Results Container */}
      <div className="results-container" aria-hidden="true">
        {/* WPM Row */}
        <div className="calculation-row">
          <div className="stat-item">
            <div className="stat-box">
              <span className="stat-number">{wpm}</span>
            </div>
            <p className="stat-label">Words/Min</p>
          </div>

          <span className="operator operator-x">x</span>

          <div className="stat-item">
            <div className="stat-box">
              <span className="stat-number">{accuracy}</span>
            </div>
            <p className="stat-label">Accuracy%</p>
          </div>

          <span className="operator">=</span>

          <div className="stat-item final">
            <div className="stat-box">
              <span className="stat-number">{finalWPM}</span>
            </div>
            <p className="stat-label">Final WPM</p>
          </div>
        </div>

        {/* CPM Row */}
        <div className="calculation-row">
          <div className="stat-item">
            <div className="stat-box">
              <span className="stat-number">{cpm}</span>
            </div>
            <p className="stat-label">Chars/Min</p>
          </div>

          <span className="operator operator-x">x</span>

          <div className="stat-item">
            <div className="stat-box">
              <span className="stat-number">{accuracy}</span>
            </div>
            <p className="stat-label">Accuracy%</p>
          </div>

          <span className="operator">=</span>

          <div className="stat-item final">
            <div className="stat-box">
              <span className="stat-number">{finalCPM}</span>
            </div>
            <p className="stat-label">Final CPM</p>
          </div>
        </div>
      </div>

      {/* Bottom Controls */}
      <p className="speed-level">
        Your typing speed is <strong>{speedLevel}</strong>
      </p>

      <button className="retake-button" onClick={onRetakeTest}>
        Retake Test
      </button>
    </div>
  );
};

export default EndScreen;
