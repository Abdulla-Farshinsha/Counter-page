import { useState } from "react";
import "./App.css";

function App() {
  const [scored, setScored] = useState(0);
  const [conceded, setConceded] = useState(0);

  const resetScores = () => {
    setScored(0);
    setConceded(0);
  };
  return (
    <div className="App">
      <h1> Football Scoreboard ⚽</h1>

      <p className="scored">Goals Scored: {scored}</p>
      <p className="conceded">Goals Conceded: {conceded}</p>
      <p className="difference">Goal Difference: {scored - conceded}</p>

      <div className="buttons">
        <button className="score-btn" onClick={() => setScored(scored + 1)}>
          + Goal Scored
        </button>
        <button className="concede-btn" onClick={() => setConceded(conceded + 1)}>
          - Goal Conceded
        </button>
        <button className="reset-btn" onClick={resetScores}>
          Reset
        </button>
      </div>
    </div>
  );
}
export default App;
