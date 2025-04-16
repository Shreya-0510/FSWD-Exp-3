// src/components/MoodDisplay.jsx
const MoodDisplay = ({ mood }) => {
    const moodEmojis = {
      Happy: "😊",
      Sad: "😢",
      Angry: "😡",
      Excited: "🤩",
      Relaxed: "😌",
    };
  
    return (
      <div style={{ fontSize: "2rem", textAlign: "center", marginTop: "20px" }}>
        {mood ? (
          <>
            <p>You are feeling: <strong>{mood}</strong></p>
            <p>{moodEmojis[mood]}</p>
          </>
        ) : (
          <p>Please select a mood</p>
        )}
      </div>
    );
  };
  
  export default MoodDisplay;
  