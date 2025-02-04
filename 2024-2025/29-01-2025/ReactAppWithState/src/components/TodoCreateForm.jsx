import React, { useState } from 'react';

function TodoCreateForm(props) {
    const [todoContent, setTodoContent] = useState('');

    function handleChangeInput(event) {
        setTodoContent(event.currentTarget.value);
    }

    function handleAddTodo() {
        props.onCreateTodo({ content: todoContent });
        setTodoContent('');
    }

    function handleCancel() {
        props.onCancel();
    }

    return (
        <div className="todoCreateForm">
            <form>
                <div>
                    <input 
                        placeholder="Введите название" 
                        value={todoContent}
                        onChange={handleChangeInput} 
                    />
                </div>
            </form>
            <div className="todoCreateControls">
                <button onClick={handleAddTodo}>Добавить</button>
                <button onClick={handleCancel}>Отменить</button>
            </div>
        </div>
    )
}

export default TodoCreateForm;