import React from "react";
import TodoCard from "./TodoCard";

function TodoCardsList(props) {
    return (
        <div className="todoCardsList">
            <ul className="todoItems">
                {props.todoList.length === 0 && 
                    'Список пусто. Создайте для себя ToDo'
                }

                {props.todoList.map((todo, i) => 
                    <TodoCard key={i} content={todo.content} />
                )}
            </ul>
        </div>
    )
}

export default TodoCardsList;