import "./EducationPlanner.css"
import { useState } from "react"

export const EducationPlanner = () => {

    const [todo,setTodo] = useState([]);

    //  geting data from Form component(chid to parent throgth the lifting)

    function userInputData(data){
        setTodo([...todo,data])
        // console.log(todo);
    }

    return (
        <>
            <div className="containner">
                <h3>Education Planner</h3>
                <Form userInputData={userInputData} />
                <List todo = {todo}/>
            </div>
        </>
    )
}


//  form Component

export const Form = ({userInputData}) => {
    const [inputSubject,setInputSubject] = useState("");
    const [inputHours,setInputHours] = useState(1);

    function handleSubmit(e){
        e.preventDefault()
        // console.log("submited");

        if(inputSubject === ""){
            alert("Please Enter Your Subject")
        }

        const userData = {
            inputSubject,
            inputHours
        }
        userInputData(userData)

        setInputSubject("")
        setInputHours(1)
    }
    
    function handleInputSubject(e){
        setInputSubject(e.target.value)
    }

    function handleInputHours(e){
        setInputHours(e.target.value)
    }

    return (
        <>
            <form action="submited" onSubmit={handleSubmit}>

                <input type="text" placeholder="Subject" value={inputSubject} onChange={handleInputSubject} />

                <input type="number" placeholder="Hours" value={inputHours} onChange={handleInputHours} />

                <button>Add</button>

            </form>
        </>
    )
}


//  List Component

export const List = ({todo}) => {

    // const [count,setCount] = useState()


    // count = todo[0].inputHours;

    function increment(){
        // setCount(count+1)
        // console.log(count);
        console.log("increment");
        let count = parseInt(todo[0].inputHours);
        count + 1;
        console.log(count);
    }

    function decrement(){
        console.log("decrement");
    }

    return (
        <>
            {
                todo.map((el,index)=>(
                    <div className="list">
                    <li key={index}>
                    <samp>{el.inputSubject}</samp>
                    <span> {el.inputHours}</span>
                    </li>

                   <div>
                   <button onClick={increment} >+</button>
                    <button onClick={decrement}>-</button>
                    <button>❌</button>
                   </div>
                    </div>
                ))
            }
        </>
    )
}

