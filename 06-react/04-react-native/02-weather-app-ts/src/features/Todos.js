import { useState } from 'react';

function Todos() {
  const [todos, setTodos] = useState([{ id: 1, task: 'wash cat', done: false }]);

  const todoChecked = (id) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.done = !todo.done;
      }
    });

    setTodos(...updatedTodos);
  };

  return (
    <div>
      <h1>TODOLIST</h1>;
      <ul>
        {todos.map((todo) => {
          return (
            <div>
              <li className={todo.done ? checked : unchecked}>{todo.task}</li>
              <Button onClick={todoChecked(todo.id)}>Done</Button>
            </div>
          );
        })}
      </ul>
    </div>
  );
}

export default Todos;
