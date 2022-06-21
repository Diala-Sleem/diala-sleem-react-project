import React, { useState, useEffect } from "react";
import { AiOutlineClose } from "react-icons/ai";

import "./note.css";

const defaultState = {
  inputVal: "",
  tasks: [],
  isDuplicate: false,
  showErrorLength: false,
};

export default function Note() {
  const [state, setState] = useState(defaultState);

  function updateValue(e) {
    setState({ ...state, inputVal: e.target.value });
  }

  function addTask(e) {
    e.preventDefault();
    const temporary = [...state.tasks];

    // check if task is not empty string
    if (!state.inputVal.length) {
      setState({ ...state, showErrorLength: true, isDuplicate: false });
      return;
    }

    // check if task already exists
    if (temporary.includes(state.inputVal)) {
      setState({ ...state, isDuplicate: true, showErrorLength: false });
      return;
    }

    temporary.push(state.inputVal);
    setState({ ...state, tasks: temporary, inputVal: "", isDuplicate: false });
  }

  function setDone(e) {
    e.target.parentElement.classList.toggle("strike");
  }

  function deleteTask(index) {
    const tasks = state.tasks.filter((x, i) => index !== i);
    setState({ ...state, tasks });
  }

  function removeAlert(e) {
    setState({ ...state, isDuplicate: false, showErrorLength: false });
  }

  //-----------------
  // useEffect(() => {
  //   // Update the document title using the browser API
  //   document.title = `You clicked ${state} times`;
  // }, [state, setState]);
  //--------------
  return (
    <div className="todoContainer">
      <div className="todoParent">
        <form onSubmit={addTask}>
          <div>
            <input
              type="text"
              className="inputForm"
              onChange={updateValue}
              value={state.inputVal}
            />
            <button type="submit" className="contact-btn">
              Add Notes
            </button>
          </div>
        </form>

        {state.isDuplicate && (
          <div className="thanksMsg">
            <strong>Attention!</strong> Text already defined!
            <span type="button" onClick={removeAlert} className="close">
              <AiOutlineClose />
            </span>
          </div>
        )}

        {state.showErrorLength && (
          <div className="thanksMsg">
            <strong>Attention!</strong> Write something{" "}
            <span type="button" onClick={removeAlert} className="close">
              <AiOutlineClose />
            </span>
          </div>
        )}

        <div className="todoContainer">
          <ul className="list">
            {state.tasks.map((task, index) => (
              <li key={task}>
                <div> {task}</div>

                <button onClick={(e) => setDone(e)} className="list-btn">
                  Done
                </button>
                <button onClick={() => deleteTask(index)} className="list-btn">
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
