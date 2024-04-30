/* eslint-disable react/prop-types */


export const GroceryList = ({groceryItemList}) => {
    console.log(groceryItemList);
  return (
    <div>
        {
           
            // eslint-disable-next-line react/prop-types
            groceryItemList.map((el,index)=>(
                <li key={index}>{el}</li>
            ))
        }
    </div>
  )
}
