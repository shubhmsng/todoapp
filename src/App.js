import { useState, useRef } from 'react';
import TodoItem from './TodoItem';
import './App.css';

function App() {
  const [todo, setTodo] = useState([]);
  const textbox = useRef(null);

  const addNewTodo = () => {
    if(textbox.current.value) {
      let new_todo = [...todo];
      new_todo.push(textbox.current.value);
      setTodo(new_todo);
      textbox.current.value = "";
    }
  }
  
  const removeTodo = name => {
    if(name) {
      let new_todo = [...todo];
      new_todo = new_todo.filter(val => val !== name);
      setTodo(new_todo);
    }
  }
 
  return (
    <div>
      <h1 className="title">To Do App</h1>
      <div className="App">
        <input type="text" className="todo-textbox" placeholder="Add todo" ref={textbox}></input>
        <button type="button" className="add-btn" onClick={addNewTodo}>Add</button>
      </div>
      <TodoItem todo={todo} removeTodo={removeTodo}/>
    </div>
  );
}

export default App;
