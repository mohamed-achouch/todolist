import React from "react";

const Form = ({ inputText, setInputText, todos, setTodos,setStatus }) => {
  // add Function
  const inputTextHandler = (event) => {
  setInputText(event.target.value);
  };
  // On Click in button  use this Function
  const submitTodoHandler = (event) => {
    event.preventDefault();
    if(inputText === ""){
      return alert('please enter your task')
    }
    setTodos([
      ...todos,
      {
        text: inputText,
        completed: false,
        id: Math.random() * 1000,
      },
    ]);
    setInputText("");
  };
  const statusHandler = (event) => {
    setStatus(event.target.value);
  };

  return (
    <form className="form">
      <input className="text" onChange={inputTextHandler} value={inputText} />
     <div>
     <button className="btn" onClick={submitTodoHandler}>
        Add To list
      </button>

      <select className="select-list" onChange={statusHandler}>
        <option>all</option>
        <option>completed</option>
        <option>unCompleted</option>
      </select>
     </div>

    </form>
  );
};
export default Form;
