import { v4 as generatedUnitId } from 'uuid';
import "./EducationPlanner.css"
import { useState } from "react"

export const EducationPlanner = () => {

    const [todo, setTodo] = useState([]);

    //  geting data from Form component(chid to parent throgth the lifting)

    function userInputData(data) {
        setTodo([...todo, data])
        // console.log(todo);
    }

    return (
        <>
            <div className="containner">
                <h3>Education Planner</h3>
                <Form userInputData={userInputData} />
                <List todo={todo} setTodo={setTodo} />
            </div>
        </>
    )
}


//  form Component

export const Form = ({ userInputData }) => {

    const [inputSubject, setInputSubject] = useState("");

    const [inputHours, setInputHours] = useState(1);

    function handleSubmit(e) {

        e.preventDefault()
        // console.log("submited");

        if (inputSubject === "") {
            alert("Please Enter Your Subject")
        }
        else {



            const userData = {
                inputSubject,
                inputHours,
                id: generatedUnitId()
            }
            userInputData(userData)

            setInputSubject("")
            setInputHours(1)
        }
    }

    function handleInputSubject(e) {
        setInputSubject(e.target.value)
    }

    function handleInputHours(e) {
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

export const List = ({ todo, setTodo }) => {


    //  increase 

    function increase(idx) {
        let countVal = [...todo];
        countVal[idx].inputHours = parseInt(countVal[idx].inputHours) + 1;
        setTodo(countVal)
    }

    // deacrease

    function deacrease(idx) {
        let countVal = [...todo];
        if (countVal[idx].inputHours !== 1) {

            countVal[idx].inputHours = parseInt(countVal[idx].inputHours) - 1;
        }
        setTodo(countVal)
    }

    // deleteList
    function deleteList(id) {
        let fillterData = todo.filter((todo) => (
            todo.id !== id),
        )
        setTodo(fillterData)
    }


    return (
        <>
            {
                todo.map((el, idx) => (

                    <div className="list" key={el.id}>
                        <li >
                            <samp>{el.inputSubject}</samp>
                            <span> {el.inputHours}</span>
                        </li>

                        <div>
                            <button onClick={() => increase(idx)}>+</button>

                            <button onClick={() => deacrease(idx)}>-</button>
                            <button onClick={() => deleteList(el.id)}>❌</button>
                        </div>
                    </div>
                ))
            }
        </>
    )
}

