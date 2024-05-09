import { useState } from "react"
import { v4 as unitIdFromuuid } from 'uuid';
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import "./GroceryApp.css";

export const GroceryApp = () => {
  const [allTodo, setAllTodo] = useState([]);

  const [todo, setTodo] = useState("");


  function handleTodoSubmit(e) {
    e.preventDefault();

    if (todo.trim() === "") {
      // alert("he")
      toast.error("Please insert grocery item", {
        position: "top-center",
      });
    }
    else {


      setAllTodo([...allTodo, { todo, isChecked: false, id: unitIdFromuuid() }])
      console.log(allTodo);
      toast.success("You added a grocery!!!");
      setTodo("");
    }

  }



  function handleDeleted(id) {
    console.log(id);
    setAllTodo(allTodo.filter((el) => el.id !== id))
  }

  function handleCheckTodo(id) {
    const newFilterTodo = allTodo.map((el) => {
      if (el.id === id) {
        el.isChecked = !el.isChecked;
        console.log(el.isChecked);
      }
      return el;
    });
    setAllTodo(newFilterTodo)

  }



  return (
    <div className="containner">
      <h3 className="heading">Grocery Bud</h3>
      <Form todo={todo} setTodo={setTodo} handleTodoSubmit={handleTodoSubmit} />

      <List allTodo={allTodo} handleDeleted={handleDeleted} handleCheckTodo={handleCheckTodo} />

    </div>
  )
}


//  form component


function Form({ todo, setTodo, handleTodoSubmit }) {

  return (
    <>
      <form action="submited" onSubmit={handleTodoSubmit}>
        <input type="text" placeholder="Write Grocery Name" value={todo} onChange={(e) => setTodo(e.target.value)} />
        <button className="btn">Add Item</button>
      </form>
    </>
  )
}



//  list componet



function List({ allTodo, handleDeleted, handleCheckTodo }) {
  // console.log(todo);


  return (
    <div className="container">
      {
        allTodo.map((element) => (
          <div className="taskContainer" key={element.id}>
            <input type="checkbox" onChange={() => handleCheckTodo(element.id)} />

            <p style={{ textDecoration: element.isChecked ? "line-through" : "" }}>{element.todo}</p>


            <button className="btn">Edit</button>

            <button className="btn" onClick={() => handleDeleted(element.id)}>Delete</button>
          </div>
        ))
      }
    </div >
  )
}