import React, { useState } from 'react';
import TodoCreateForm from './TodoCreateForm';
import TodoCardsList from './TodoCardsList';

function TodoList() {
    const [todos, setTodos] = useState([]);
    const [isShowCreateForm, setIsShowCreateForm] = useState(false);

    function toggleCreateForm() {
        setIsShowCreateForm(!isShowCreateForm);
    }

    function hideCreateForm() {
        setIsShowCreateForm(false);
    }

    function addTodo(todo) {
        setTodos([...todos, todo]);
    }

    return (
        <div className="todoContainer">
            <div className="topControls">
                <form>
                    <input placeholder="Введите название todo" />
                </form>
            </div>

            {isShowCreateForm && 
                <TodoCreateForm 
                    onCreateTodo={addTodo} 
                    onCancel={hideCreateForm} 
                />
            }

            <TodoCardsList todoList={todos} />
            <div className="bottomControls">
                <button onClick={toggleCreateForm}>
                    {isShowCreateForm ? 'Отменить' : 'Создать todo'}
                </button>
            </div>
        </div>
    )
}

export default TodoList;