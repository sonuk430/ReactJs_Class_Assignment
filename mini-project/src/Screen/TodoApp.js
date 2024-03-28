import { useState } from "react";
// import "./TodoApp.css";

function TodoApp() {
  const [subject, setSubject] = useState("");
  const [hours, setHours] = useState("");
  const [subHours, setSubHours] = useState([]);

  const hamdelSubject = (event) => {
    setSubject(event.target.value);
  };
  const hamdelhours = (event) => {
    setHours(event.target.value);
  };

  const handelAdd = () => {
   const add = [...subHours];
   console.log(add);
    

  };

  return (
    <>
      <div>
        <h1>Geekster Education Planner</h1>
        <div>
          <input value={subject} type="text" onChange={hamdelSubject} />
          <input value={hours} type="number" onChange={hamdelhours} />
          <button onClick={handelAdd}>Add</button>
        </div>
        <ul></ul>
      </div>
    </>
  );
}

export default TodoApp;
