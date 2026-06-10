import React, { useState, useEffect } from "react";
import "./App.css";
import Home from "./Home";
import Text from "./Text";
import Stats from "./Stats";
import EndScreen from "./EndScreen";
import Footer from "./Footer";

const App = () => {
  // Variables
  const [isTestActive, setIsTestActive] = useState(false);
  const [testConfig, setTestConfig] = useState({
    time: 60,
    difficulty: "Medium"
  });

  const [wpm, setWpm] = useState(0);
  const [cpm, setCpm] = useState(0);
  const [accuracy, setAccuracy] = useState(100);

  const [elapsedTime, setElapsedTime] = useState(5);
  const [shouldEnd, setShouldEnd] = useState(false);

  // Start Test
  const handleStartTest = ({ time, difficulty }) => {
    setTestConfig({ time, difficulty });
    setIsTestActive(true);
    setShouldEnd(false);
  };

  // Retake Test
  const handleRetakeTest = () => {
    setIsTestActive(false);
    setShouldEnd(false);
  };

  // Update Stats
  const handleStatsUpdate = ({ wpm, cpm, accuracy }) => {
    setWpm(wpm);
    setCpm(cpm);
    setAccuracy(accuracy);
  };

  // Endscreen Handling
  const handleElapsedTime = (t) => {
    setElapsedTime(t);
  };

  const adjustedTime = testConfig.time - elapsedTime + 1;

  useEffect(() => {
    if (adjustedTime >= testConfig.time && !shouldEnd) {
      const timer = setTimeout(() => {
        setShouldEnd(true);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [adjustedTime, testConfig.time, shouldEnd]);

  // Elements
  return (
    <main className="page-container">
      {!isTestActive ? (
        <Home
          onStartTest={handleStartTest}
          defaultTime={testConfig.time}
          defaultDifficulty={testConfig.difficulty}
        />
      ) : shouldEnd ? (
        <EndScreen
          wpm={wpm}
          cpm={cpm}
          accuracy={accuracy}
          time={testConfig.time}
          onRetakeTest={handleRetakeTest}
        />
      ) : (
        <>
          <Stats 
            time={testConfig.time}
            wpm={wpm}
            cpm={cpm}
            accuracy={accuracy}
            onElapsedTime={handleElapsedTime}
          />

          <Text 
            difficulty={testConfig.difficulty}
            onStatsUpdate={handleStatsUpdate}
            adjustedTime={adjustedTime}
          />
        </>
      )}

      <Footer/>
    </main>
  );
};

export default App;
