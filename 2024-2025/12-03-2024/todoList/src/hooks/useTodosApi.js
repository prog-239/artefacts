import { useState } from "react"
import { ApiService } from "../api/ApiService";

export const useTodosApi = () => {
    const [todos, setTodos] = useState([]);
    const [currentTodo, setCurrentTodo] = useState();

    const fetchTodos = () => {
        ApiService.getTodos()
            .then((res) => {
                setTodos(res.data);
            })
            .catch((error) => {
                console.error("Ошибка при получении Todo");
                console.error(error);
            })
    }

    const fetchTodoById = async (id) => {
        try {
            const res = await ApiService.getTodoById(id);
            setCurrentTodo(res.data);
        } catch(error) {
            console.error("Ошибка при получении Todo по id");
            console.error(error);
        }
    }

    const createTodo = async (data) => {
        try {
            await ApiService.createTodo(data);
        } catch(error) {
            console.error('Ошибка при создании todo');
            console.error(error);
        }
    }

    const updateTodo = async (id, data) => {
        try {
            await ApiService.updateTodo(id, data);
        } catch(error) {
            console.error('Ошибка при обновлении todo');
            console.error(error);
        }
    }

    const removeTodo = async (id) => {
        try {
            await ApiService.removeTodo(id);
        } catch(error) {
            console.error('Ошибка при удалении todo');
            console.error(error);
        }
    }

    return {
        todos,
        currentTodo,
        fetchTodos,
        fetchTodoById,
        createTodo,
        updateTodo,
        removeTodo,
    }
}
