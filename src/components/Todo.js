import React from "react";

const Todo = ({ text, todo, todos, setTodos }) => {
  const deleteHandler = () => {
    setTodos(todos.filter((element) => element.id !== todo.id));
  };

  const completeHandler = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };
  return (
    <div className="item-section">
      <li className={`item-list ${todo.completed ? "completed" : ""}`}>
        {text}
      </li>
      <button className="btn-delete" onClick={deleteHandler}>
        Delete
      </button>
      <button className="btn-complete" onClick={completeHandler}>
        Complete
      </button>
    </div>
  );
};

export default Todo;
