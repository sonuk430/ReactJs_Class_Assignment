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

  const [isChecked, setIsChecked] = useState(false);

  function handleInput(e) {
    setGrocery(() => e.target.value)
  }

  function handleAddItem() {
    setTodo([...todo, { grocery, isChecked }])
    // console.log(todo);
  }

  return (
    <>
      <input type="text" value={grocery} onChange={handleInput} />
      <button onClick={handleAddItem}>Add Item</button>
      <List todo={todo} />
    </>
  )
}



//  list componet



function List({ todo }) {
  console.log(todo);

  function handleChecked(){
    !todo.isChecked
  }

  return (
    <>
      {
        todo.map((el, index) => (
          <ul key={index}>
            <li >{el.grocery}</li>
            <input type="checkbox" value={el.isChecked} onChange={handleChecked} />
          </ul>
        ))
      }
    </>
  )
}