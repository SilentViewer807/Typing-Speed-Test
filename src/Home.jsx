import React, { useState, useEffect, useRef } from "react";
import "./Home.css";

const text = "Test your typing skills";

const Home = ({ onStartTest, defaultTime, defaultDifficulty }) => {
  // Variables
  const [selectedTime, setSelectedTime] = useState(
    defaultTime ? `${defaultTime / 60 >= 1 ? defaultTime / 60 + " minute" : defaultTime + " seconds"}` 
                : "1 minute"
  );
  const [numberedTime, setNumberedTime] = useState(defaultTime ?? 60);
  const [selectedDifficulty, setSelectedDifficulty] = useState(
    defaultDifficulty ?? "Medium"
  );

  const [isTimeDropdownOpen, setIsTimeDropdownOpen] = useState(false);
  const [isDifficultyDropdownOpen, setIsDifficultyDropdownOpen] = useState(false);

  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  const timeRef = useRef(null);
  const difficultyRef = useRef(null);

  const timeOptions = [
    "10 seconds",
    "30 seconds",
    "1 minute",
    "2 minutes",
    "3 minutes",
    "5 minutes",
    "10 minutes"
  ];

  const timeNumbers = [10, 30, 60, 120, 180, 300, 599];

  const difficultyOptions = ["Easy", "Medium", "Hard", "Jumbled"];

  // Handlers
  const handleTimeDropdownClick = () => {
    setIsTimeDropdownOpen(!isTimeDropdownOpen);
    setIsDifficultyDropdownOpen(false);
  }

  const handleDifficultyDropdownClick = () => {
    setIsDifficultyDropdownOpen(!isDifficultyDropdownOpen);
    setIsTimeDropdownOpen(false);
  }

  const handleTimeSelect = (option, index) => {
    setSelectedTime(option);
    setNumberedTime(timeNumbers[index]);
    setIsTimeDropdownOpen(false);
  };

  const handleDifficultySelect = (option) => {
    setSelectedDifficulty(option);
    setIsDifficultyDropdownOpen(false);
  };

  const handleStartTest = () => {
    if (onStartTest) {
      onStartTest({ time: numberedTime, difficulty: selectedDifficulty });
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      const clickedTime = timeRef.current && timeRef.current.contains(event.target);
      const clickedDifficulty = difficultyRef.current && difficultyRef.current.contains(event.target);

      if (!clickedTime && !clickedDifficulty) {
        setIsTimeDropdownOpen(false);
        setIsDifficultyDropdownOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  // Header Effect
  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setCurrentText(prevText => prevText + text[currentIndex]);
        setCurrentIndex(prevIndex => prevIndex + 1);
      }, 60);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text]);

  // Elements
  return (
    <div className="home-container">
      {/* Headers */}
      <h1 className="main-header" aria-label={text}>{currentText}</h1>
      <h2 className="sub-header">Select the time and difficulty</h2>

      <div className="dropdowns-container">
        {/* Time Dropdown */}
        <div className="dropdown-wrapper" ref={timeRef}>
          <div
            className="dropdown-container"
            role="combobox"
            aria-expanded={isTimeDropdownOpen}
            aria-haspopup="listbox"
            aria-label="Select test duration"
            tabIndex={0}
            onClick={handleTimeDropdownClick}
            onKeyDown={(e) => e.key === 'Enter' && handleTimeDropdownClick()}
          >
            <span className="dropdown-text">{selectedTime}</span>
            <span className={`dropdown-arrow ${isTimeDropdownOpen ? "open" : ""}`} aria-hidden="true">
              ▼
            </span>
          </div>
          {isTimeDropdownOpen && (
            <div className="dropdown-options" role="listbox">
              {timeOptions.map((option, index) => (
                <div
                  key={index}
                  className="dropdown-option"
                  role="option"
                  aria-selected={selectedTime === option}
                  tabIndex={0}
                  onClick={() => handleTimeSelect(option, index)}
                  onKeyDown={(e) => e.key === 'Enter' && handleTimeSelect(option, index)}
                >
                  {option}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Difficulty Dropdown */}
        <div className="dropdown-wrapper" ref={difficultyRef}>
          <div
            className="dropdown-container"
            role="combobox"
            aria-expanded={isDifficultyDropdownOpen}
            aria-haspopup="listbox"
            aria-label="Select test difficulty"
            tabIndex={0}
            onClick={handleDifficultyDropdownClick}
            onKeyDown={(e) => e.key === 'Enter' && handleDifficultyDropdownClick()}
          >
            <span className="dropdown-text">{selectedDifficulty}</span>
            <span className={`dropdown-arrow ${isDifficultyDropdownOpen ? "open" : ""}`} aria-hidden="true">
              ▼
            </span>
          </div>
          {isDifficultyDropdownOpen && (
            <div className="dropdown-options" role="listbox">
              {difficultyOptions.map((option, index) => (
                <div
                  key={index}
                  className="dropdown-option"
                  role="option"
                  aria-selected={selectedDifficulty === option}
                  tabIndex={0}
                  onClick={() => handleDifficultySelect(option)}
                  onKeyDown={(e) => e.key === 'Enter' && handleDifficultySelect(option)}
                >
                  {option}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Start Button */}
      <button
        className="start-button"
        onClick={handleStartTest}
        aria-label="Start Test"
      >
        Start Test 🚀
      </button>
    </div>
  );
};

export default Home;
