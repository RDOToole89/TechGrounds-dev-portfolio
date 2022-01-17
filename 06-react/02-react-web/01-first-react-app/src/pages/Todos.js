import { useState } from 'react';
import { Wrapper } from '../styled/StyledComponents';

function Todos() {
  // todos state => initial state
  const [todos, setTodos] = useState([
    { id: 1, task: 'wash cat', done: false },
    { id: 2, task: 'wash dog', done: true },
    { id: 3, task: 'wash rat', done: false },
  ]);

  // state to track the userInput
  const [userInput, setUserInput] = useState('');

  // function takes in an ID and creates and new array
  // with the updated todo!
  const todoChecked = (id) => () => {
    // updatedTodos map => check for each todo object
    // in the todos array if todo.id matches the id passed
    //  to the function
    const updatedTodos = todos.map((todo) => {
      // if the id matches create a new object
      // spread the old todo in it and update
      // the done property to be the reverse of the current
      // state => flipping the boolean with !
      if (todo.id === id) {
        return { ...todo, done: !todo.done };
      } else {
        // otherwise if it is not the todo we are looking for
        // simply return the original todo
        return todo;
      }
    });

    // set the todos state with the updatedTodos array that
    // you just created
    setTodos(updatedTodos);
  };

  // add a task to the the todos
  const addTask = (event) => {
    // set the new todo to the userInput
    const newTodo = { id: todos.length + 1, task: userInput, done: false };

    // if the user presses enter (event.keyCode === 13) set the todo state by spreading the old todo
    // state and adding the newTodo
    if (event.keyCode === 13) {
      setTodos([...todos, newTodo]);
    }
  };

  // function to remove a todo! Takes in the todo id
  const removeTodo = (id) => () => {
    console.log('REMOVE TODO', id);

    // loop over the todos state and create a new Todo Array with
    // filter.
    const updatedTodos = todos.filter((todo) => {
      // if the current todo is the todo we want to remove
      // DONT add it to the updatedTodos
      if (todo.id === id) {
        return false;
      } else {
        // if this is NOT the todo we want to remove add it to the
        // updated todos
        return true;
      }
    });

    // change the original todos state by calling setState
    setTodos(updatedTodos);
  };

  // handles the userInput state
  const handleUserInput = (event) => {
    setUserInput(event.target.value);
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        margin: '0 auto',
        maxWidth: '1200px',
        height: '100vh',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <h1>TODOLIST</h1>
      <ul>
        {todos.map((todo, i) => {
          return (
            <li
              style={
                todo.done
                  ? { color: 'green', cursor: 'pointer' }
                  : { color: 'red', cursor: 'pointer' }
              }
              key={i + Math.random()}>
              <div style={{ display: 'flex' }}>
                <p onClick={todoChecked(todo.id)}>
                  {todo.id} {todo.task}`{' '}
                </p>
                <div
                  style={{ marginLeft: '2rem', border: '1px solid black' }}
                  key={todo.id + Math.random()}
                  onClick={removeTodo(todo.id)}>
                  X
                </div>
              </div>
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
    </div>
  );
}

export default Todos;
