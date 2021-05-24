import React from 'react';
let count = 0;
const TodoItem = ({ todo, removeTodo }) => {
    console.log(++count);
    return(
        <ul>
            {todo?.map((val, index) => 
                <li key={val + index}>{val}<span className="close" onClick={() => removeTodo(val)}>&times;</span></li>
            )}
        </ul>
    );
}

export default TodoItem;