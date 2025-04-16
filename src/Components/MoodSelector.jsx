// src/components/MoodSelector.jsx
import { useState } from "react";
import MoodDisplay from "./MoodDisplay";

const MoodSelector = () => {
  const [mood, setMood] = useState("");

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Select Your Mood</h2>
      <select onChange={(e) => setMood(e.target.value)} value={mood}>
        <option value="">--Choose--</option>
        <option value="Happy">Happy</option>
        <option value="Sad">Sad</option>
        <option value="Angry">Angry</option>
        <option value="Excited">Excited</option>
        <option value="Relaxed">Relaxed</option>
      </select>

      <MoodDisplay mood={mood} />
    </div>
  );
};

export default MoodSelector;
