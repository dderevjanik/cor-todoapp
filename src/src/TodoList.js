import React from 'react';
import { TodoItem } from './TodoItem';

export const TodoList = (props) => {
    let filteredTodos = [];
    switch (props.filter) {
        case 'ALL': { filteredTodos = props.todos; break; }
        case 'NOTDONE': { filteredTodos = props.todos.filter(todo => todo.done === false); break; }
        case 'DONE': { filteredTodos = props.todos.filter(todo => todo.done === true); break; }
        default: { filteredTodos = props.todos }
    }
    return (<div className="list-block" >
        <div className="list-group">
            <ul>
                {filteredTodos.map((todoItem, index) => (
                    <TodoItem
                        key={index}
                        count={todoItem.count}
                        done={todoItem.done}
                        id={todoItem.id}
                        text={todoItem.text}
                        actions={props.actions}
                        />
                ))}
            </ul>
        </div>
    </div>)
};

TodoList.PropTypes = {
    actions: React.PropTypes.object.isRequired,
    filter: React.PropTypes.string.isRequired,
    todos: React.PropTypes.array.isRequired
};
