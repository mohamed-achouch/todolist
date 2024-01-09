import React from "react";
import Todo from "./Todo";

const TodoList = ({ setTodos, todos ,filteredTodos }) => {
  return (
    <div className="todo-list">
      <ul>
        {filteredTodos.map((item) =>(  <Todo
            todo={item}
            text={item.text}
            key={item.id}
            todos={todos}
            setTodos={setTodos}
          />))}
      </ul>
    </div>
  );
};

export default TodoList;
