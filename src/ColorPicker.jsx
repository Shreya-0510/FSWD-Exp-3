import { useState } from "react";
import ColorBox from "./ColorBox";

const ColorPicker = () => {
  const [color, setColor] = useState("blue");

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Pick a Color</h2>
      <input
        type="color"
        onChange={(e) => setColor(e.target.value)}
        value={color}
      />
      <ColorBox color={color} />
    </div>
  );
};

export default ColorPicker;
