import React, { useState, useEffect } from 'react';
import { Button, TextField } from '@radix-ui/themes';

import { TodoCreateForm } from './TodoCreateForm';
import { TodoCardsList } from './TodoCardsList';
import { TodosStorageService } from '../services/StorageService';

export const TodoList = () => {
    const [todos, setTodos] = useState([]);
    const [isShowCreateForm, setIsShowCreateForm] = useState(false);
    const [statusLoading, setStatusLoading] = useState(true);

    useEffect(function () {
        const storageTodos = TodosStorageService.fetchTodos();
        storageTodos.then(function (data) {
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
        const filteredTodos = todos.filter(function (todo) {
            return todo.id !== id;
        });

        TodosStorageService.save(filteredTodos);
        setTodos(filteredTodos);
    }

    return (
        <div className="todoContainer">
            <div className="topControls">
                <form>
                    <TextField.Root placeholder="Search the docs…">
                        <TextField.Slot>
                        </TextField.Slot>
                    </TextField.Root>
                </form>
            </div>

            <TodoCardsList
                todoList={todos}
                loading={statusLoading}
                onRemove={removeTodoById}
            />
            <div className="bottomControls">
                <TodoCreateForm
                    onCreateTodo={addTodo}
                    onCancel={hideCreateForm}
                />
            </div>
        </div>
    )
}

export const getExampleFunc = () => {
    console.log('Example');
}