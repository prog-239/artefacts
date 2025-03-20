import { useEffect } from 'react';
import './App.css'
import { useTodosApi } from './hooks/useTodosApi';


function App() {
  const {
    todos,
    currentTodo,
    fetchTodos,
    fetchTodoById,
    createTodo,
    updateTodo,
    removeTodo,
  } = useTodosApi();

  useEffect(() => {
    fetchTodos();
  }, [])

  return (
    <div>
      
    </div>
  );
}

export default App
