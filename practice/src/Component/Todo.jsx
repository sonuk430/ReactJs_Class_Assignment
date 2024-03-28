import { useState } from "react";

function Todo() {
  const [tital, setTital] = useState("");
  const [description, setDescription] = useState("");

  const [mainTask, setMainTask] = useState([]);

  const SubmitHandler = (e) => {
    e.preventDefault();

    setMainTask([...mainTask, { tital, description }]);
    console.log(mainTask);

    setTital("");
    setDescription("");
  };

  const deletHandler = (el) => {
    let copyTask = [...mainTask];
    copyTask.splice(el, 1);
    setMainTask(copyTask);
  };

  let renderTask = <h2>No Task Add</h2>;

  if (mainTask.length > 0) {
    renderTask = mainTask.map((el, idex) => {
      return (
        <div key={idex}>
          <h5>{el.tital}</h5>
          <h6>{el.description}</h6>
          <button
            onClick={() => {
              deletHandler(el);
            }}
          >
            x
          </button>
        </div>
      );
    });
  }

  return (
    <>
      <h2>todo List App</h2>
      <form onSubmit={SubmitHandler}>
        <input
          type="text"
          placeholder="Item List"
          value={tital}
          onChange={(e) => {
            setTital(e.target.value);
          }}
        />

        <input
          type="text"
          placeholder="Enter Discription"
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        />

        <button>Add Item</button>
      </form>

      <div>
        <ul>{renderTask}</ul>
      </div>
    </>
  );
}

export default Todo;
