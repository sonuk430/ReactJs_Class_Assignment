import { useState } from "react";
// import "./TodoApp.css";

const list = [
  {
    id: 1,
    subject: "HTML",
    rating: 9,
  },
  {
    id: 2,
    subject: "CSS",
    rating: 7,
  },
];

export default function TodoApp() {
  const [todo,setTodo] = useState([]);

  setTodo(...todo,...list)

  console.log(todo);

  return (
    <>
      <UserTaskEnter />
      <UserTskRender  />
    </>
  );
}

function UserTaskEnter() {
  const [userSubject, setUserSubject] = useState("");
  const [userSubRating, setUserSubRating] = useState();

  function handleUserSubjects(event) {
    setUserSubject(event.target.value);
  }

  function handleUserSubRating(event) {
    setUserSubRating(event.target.value);
  }


  function handleTaskAdd(){
    const userData = {
      userSubject,
      userSubRating
    }

    console.log(userData);
  }

  return (
    <>
      <div>
        <input type="text" value={userSubject} onChange={handleUserSubjects} />
        <input
          type="number"
          value={userSubRating}
          onChange={handleUserSubRating}
        />
        <button onClick={handleTaskAdd}>Add Task</button>
      </div>
    </>
  );
}

function UserTskRender() {
  return (
    <>
      <div>
        <ul>
          {list.map((el, index) => {
            return (
              <li key={el.id}>
                {el.subject} {el.rating} <span>❌</span>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
