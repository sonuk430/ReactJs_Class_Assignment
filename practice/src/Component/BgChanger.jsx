import { useState } from "react";

function BgChanger() {
  const [color, setColor] = useState("olive");

  return (
    <>
      <h2>BG Changer</h2>
      <div
        style={{
          width: "200px",
          height: "200px",
          borderRadius: "5px",
          backgroundColor: color,
        }}
      ></div>
      <div>
        <button onClick={() => setColor("red")}>Red</button>
        <button onClick={() => setColor("Blue")}>Blue</button>
        <button onClick={() => setColor("Green")}>Green</button>
      </div>
      <hr />
    </>
  );
}

export default BgChanger;
