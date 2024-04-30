import { useState } from "react"
import { GroceryList } from "../Components/GroceryList";

export const GroceryApp = () => {
  const [groceryItem,setGroceryItem] = useState("");

  const [groceryItemList,setGroceryItemList] = useState([]);

  function handleGroceryItem(e){
    setGroceryItem(e.target.value)
  }

  function handleAddItem(){
   setGroceryItemList([...groceryItemList,groceryItem])

   console.log(groceryItemList);
  }

  

  return (
   <>
   <div>
    <h2>Grocery Bud</h2>
    <input type="text"  value={groceryItem} onChange={handleGroceryItem}/>
    <button onClick={handleAddItem}>Add</button>
   </div>

    <GroceryList groceryItemList={groceryItemList}/>

   
   </>
  )
}







