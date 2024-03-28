import { useState } from "react";

function ArrayInState() {
  const [food, setFood] = useState(["Mango", "Orange", "Banana"]);

  const handleAddFood = () => {
    const newFood = document.getElementById("foodinput").value;

    document.getElementById("foodinput").value = "";

    // console.log(newFood);
    setFood([...food, newFood]);
  };

  const handleRemoveFood = (index) => {
    console.log(index);
    setFood(food.filter((element, i) => i !== index));
  };

  return (
    <>
      <div>
        <ul>
          {food.map((element, index) => (
            <li key={index}>
              {element}{" "}
              <span
                onClick={() => handleRemoveFood(index)}
                style={{ backgroundColor: "orange", cursor: "pointer" }}
              >
                X
              </span>
            </li>
          ))}
        </ul>

        <input type="text" id="foodinput" />
        <button onClick={handleAddFood}>Add Food</button>
      </div>
    </>
  );
}

export default ArrayInState;
