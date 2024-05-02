import { useState } from "react"

export const GroceryApp = () => {
  return (
    <div className="containner">
      <h3>Grocery Bud</h3>
      <Form />

    </div>
  )
}


//  form component

function Form() {
  const [todo, setTodo] = useState([]);

  const [grocery, setGrocery] = useState("")

  // const [isChecked, setIsChecked] = useState(false);

  function handleInput(e) {
    setGrocery(() => e.target.value)
  }

  function handleAddItem() {
    setTodo([...todo, { grocery, isChecked: false }])
    // console.log(todo);
  }

  return (
    <>
      <input type="text" value={grocery} onChange={handleInput} />
      <button onClick={handleAddItem}>Add Item</button>
      <List todo={todo} setTodo={setTodo} />
    </>
  )
}



//  list componet



function List({ todo, setTodo }) {
  // console.log(todo);

  function handleChecked(index) {
    console.log(index);
    if (todo[index].isChecked === false) {
      todo[index].isChecked !== false;
    }
    console.log(todo[index].isChecked);

  }

  return (
    <>
      {
        todo.map((el, index) => (
          <ul key={index}>
            <li >{el.grocery}</li>
            <input type="checkbox" value={el.isChecked} onChange={() => handleChecked(index)} />
          </ul>
        ))
      }
    </>
  )
}