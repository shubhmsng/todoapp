import { useState, useCallback, useMemo } from 'react';
import TodoItem from './TodoItem';
import './App.css';

let count1 = 0;
let count2 = 0;

function App() {
  const [todo, setTodo] = useState([]);
  const [todoName, setTodoName] = useState("");

  const addNewTodo = useCallback(() => {
    console.log("count1", ++count1);
    if(todoName) {
      let new_todo = [...todo];
      new_todo.push(todoName);
      setTodo(new_todo);
      setTodoName("");
    }
  } , [todo, todoName]);

  // const addNewTodo = () => {
  //   console.log("count1", ++count1);
  //   if(todoName) {
  //     let new_todo = [...todo];
  //     new_todo.push(todoName);
  //     setTodo(new_todo);
  //     setTodoName("");
  //   }
  // }
  
  const removeTodo = useMemo(() => name => {
    console.log("count2", ++count2);
    if(name) {
      let new_todo = [...todo];
      new_todo = new_todo.filter(val => val !== name);
      setTodo(new_todo);
    }
  }, [todo]);

  // const removeTodo = (name) => {
  //   console.log("count2", ++count2);
  //   if(name) {
  //     let new_todo = [...todo];
  //     new_todo = new_todo.filter(val => val !== name);
  //     setTodo(new_todo);
  //   }
  // }

  const updateText = (e) => {
    setTodoName(e.target.value);
  };
 
  return (
    <div>
      <h1 className="title">To Do App</h1>
      <div className="App">
        <input 
          type="text"
          className="todo-textbox"
          placeholder="Add todo"
          onChange={updateText}
          value={todoName} >
        </input>
        <button 
          type="button"
          className="add-btn"
          onClick={addNewTodo}>
          Add
        </button>
      </div>
      <TodoItem 
        todo={todo}
        removeTodo={removeTodo}/>
    </div>
  );
}

export default App;
