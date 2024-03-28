import { useState } from "react";

const EducationPlanner = () => {
  const [userSubData, setUserSubData] = useState([]);
  const [userSubName, setUserSubName] = useState("");
  const [userSubHours, setUserSubHours] = useState("");

  const clickHandler = () => {
    setUserSubData([...userSubData, { userSubName, userSubHours }]);
    console.log(userSubData);
  };

  let renderTask = <h2>No Task Add</h2>;

  if (renderTask < 0) {
    renderTask = userSubData.map((el, index) => {
      return (
        <ul key={index}>
          <li>{el.userSubName}</li>
          <li>{el.userSubHours}</li>
        </ul>
      );
    });
  }

  return (
    <>
      <div>
        <h1>Geekster Education Planner</h1>
        <input
          type="text"
          value={userSubName}
          onChange={(el) => setUserSubName(el.target.value)}
        />
        <input
          type="number"
          value={userSubHours}
          onChange={(el) => setUserSubHours(el.target.value)}
        />
        <button onClick={clickHandler}>Add</button>
      </div>
    </>
  );
};

export default EducationPlanner;

// () => {
//     setUserSubData([...userSubData, { userSubName, userSubHours }]);
//     console.log(userSubData);
//   }
