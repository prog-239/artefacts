import React from "react";
import { TodoCard } from "./TodoCard";
import { PrettyLoader } from "./PrettyLoader";

export const TodoCardsList = (props) => {
    function handleRemove() {
        // confirm - это JS-функция, которая в бразуере 
        // вызовет окно подтверждения действия
        const confirmed = confirm('Вы действительно хотите удалить?');
        if (confirmed) props.onRemove(todo.id);
    }

    return (
        <div className="todoCardsList">
            {props.loading ? <PrettyLoader /> : (
                <ul className="todoItems">
                    {props.todoList.length === 0 && 
                        <p>Список пусто. Создайте для себя ToDo</p>
                    }

                    {props.todoList.map((todo, i) => 
                        <TodoCard 
                            key={i} 
                            content={todo.content}
                            onRemove={handleRemove}
                        />
                    )}
                </ul>
            )}
        </div>
    )
}
