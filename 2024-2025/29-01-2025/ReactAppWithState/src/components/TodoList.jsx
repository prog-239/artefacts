import React, { useState, useEffect } from 'react';
import TodoCreateForm from './TodoCreateForm';
import TodoCardsList from './TodoCardsList';
import TodosStorageService from '../services/StorageService';

function TodoList() {
    const [todos, setTodos] = useState([]);
    const [isShowCreateForm, setIsShowCreateForm] = useState(false);
    const [statusLoading, setStatusLoading] = useState(true);

    useEffect(function() {
        const storageTodos = TodosStorageService.fetchTodos();
        storageTodos.then(function(data) {
            console.log(data);
            setTodos(data);
            setStatusLoading(false);
        })
    }, [])

    function toggleCreateForm() {
        setIsShowCreateForm(!isShowCreateForm);
    }

    function hideCreateForm() {
        setIsShowCreateForm(false);
    }

    function addTodo(todo) {
        const updatedTodos = [...todos, todo];
        setTodos(updatedTodos);
        TodosStorageService.save(updatedTodos);
    }

    function removeTodoById(id) {
        const filteredTodos = todos.filter(function(todo) {
            return todo.id !== id;
        });

        TodosStorageService.save(filteredTodos);
        setTodos(filteredTodos);
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

            <TodoCardsList
                todoList={todos} 
                loading={statusLoading}
                onRemove={removeTodoById}
            />
            <div className="bottomControls">
                <button onClick={toggleCreateForm}>
                    {isShowCreateForm ? 'Отменить' : 'Создать todo'}
                </button>
            </div>
        </div>
    )
}

export default TodoList;