import React from 'react';

const TodoItem = ({ todo, removeTodo }) => {
    return(
        <ul>
            {todo?.map((val, index) => 
                <li key={val + index}>{val}<span className="close" onClick={() => removeTodo(val)}>&times;</span></li>
            )}
        </ul>
    );
}

export default TodoItem;