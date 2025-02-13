import React from "react";
import TodoCard from "./TodoCard";
import PrettyLoader from "./PrettyLoader";

function TodoCardsList(props) {
    return (
        <div className="todoCardsList">
            {props.loading ? <PrettyLoader /> : (
                <ul className="todoItems">
                    {props.todoList.length === 0 && 
                        'Список пусто. Создайте для себя ToDo'
                    }

                    {props.todoList.map((todo, i) => 
                        <TodoCard 
                            key={i} 
                            content={todo.content}
                            onRemove={function() {
                                const confirmed = confirm('Вы действительно хотите удалить?');
                                if (confirmed) props.onRemove(todo.id);
                            }}
                        />
                    )}
                </ul>
            )}
        </div>
    )
}

export default TodoCardsList;