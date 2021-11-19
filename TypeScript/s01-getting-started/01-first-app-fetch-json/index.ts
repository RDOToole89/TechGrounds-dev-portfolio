import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/todos/1';

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

axios
  .get(url)
  .then((response) => {
    // Response.data has properties of:
    // id
    // title
    // completed
    const todo = response.data as Todo;

    const id = todo.id;
    const title = todo.title;
    const completed = todo.completed;

    logTodo(id, title, completed);
  })
  .catch((error) => console.log(error));

const logTodo = (id: number, title: string, completed: boolean): void => {
  console.log(`
    The todo with ${id} and ${title} is ${completed}
  `);
};
