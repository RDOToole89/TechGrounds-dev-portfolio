import { useState } from 'react';
import { Wrapper } from '../styled/StyledComponents';

function Todos() {
  const [todos, setTodos] = useState([
    { id: 1, task: 'wash cat', done: false },
    { id: 2, task: 'wash dog', done: true },
    { id: 3, task: 'wash rat', done: false },
  ]);

  const [userInput, setUserInput] = useState('');

  const todoChecked = (id) => () => {
    console.log('inside TODO CHECKED', id);

    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, done: !todo.done };
      } else {
        return todo;
      }
    });

    setTodos(updatedTodos);
  };

  const handleUserInput = (event) => {
    setUserInput(event.target.value);
  };

  const addTask = (event) => {
    if (event.keyCode === 13) {
      setTodos([...todos, { id: todos.length + 1, task: userInput, done: false }]);

      console.log(todos);
    }

    setUserInput('');
  };

  return (
    <Wrapper>
      <h1>TODOLIST</h1>
      <ul>
        {todos.map(({ id, task, done }, i) => {
          console.log('TODO IN UI', id, task, done);
          console.log('TODOS', todos);

          return (
            <li
              onClick={todoChecked(id)}
              style={
                done ? { color: 'green', cursor: 'pointer' } : { color: 'red', cursor: 'pointer' }
              }
              key={i + Math.random()}>
              {id} {task}`
            </li>
          );
        })}
      </ul>
      <input
        style={{ marginTop: '2rem' }}
        type='text'
        value={userInput}
        onChange={handleUserInput}
        onKeyDown={addTask}
      />
    </Wrapper>
  );
}

export default Todos;
