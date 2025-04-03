import './App.css'
import { Screen } from "./Screen";
import { Button } from "./Button";
import { todoApiService, TodoCreateDto, TodoDto } from './ApiService';
import { useState } from 'react';


const exampleTodo = {
  name: '',
  description: '',
  id: 'aslkjdh8789w3hkjshda',
}

type Todo = typeof exampleTodo;

function App() {
  const [todos, setTodos] = useState<TodoDto[]>([]) // Array<TodoDto>

  const handleCreateTodo = () => {
    const blancTodo: TodoCreateDto = {
      name: 'Пустая задача',
      description: 'Это просто пустая задача'
    }

    todoApiService.createTodo(blancTodo);
  }

  const handleFetchTodos = async () => {
    const response = await todoApiService.fetchTodos();
    setTodos(response.data);
  }

  return (
    <Screen title="Example app" footer="footer">
      <hr />
      <Button onClick={handleCreateTodo} text="Создать Todo" />
      <Button onClick={handleFetchTodos} text="Обновить Todos" />
      <ul>
        { todos.map((item) => 
          <li key={item.status}>
            <hr />
            <p>{item.name}</p>
            <p>{item.description}</p>
          </li>
        ) }
      </ul>
      <hr />
    </Screen>
  );
}

export default App
