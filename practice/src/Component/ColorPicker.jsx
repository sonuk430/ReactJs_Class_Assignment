import { useState } from "react";

function ColorPicker() {
  const [color, setColor] = useState("FFFFFF");

  const handleColorChanger = (event) => {
    setColor(event.target.value);
  };

  return (
    <>
      <div>
        <h1>ColorPicker</h1>
        <div style={{ backgroundColor: color }}>
          <p>Selected Color:- {color}</p>
        </div>
        <label>Select a Color:-</label>
        <input type="color" value={color} onChange={handleColorChanger} />
      </div>
    </>
  );
}

export default ColorPicker;
