import axios, { AxiosInstance } from "axios";

const http = axios.create({
    baseURL: 'https://some-api.utbanov.dev/',
    headers: { 'Content-Type': 'application/json' }
})


export type TodoCreateDto = {
    name: string;
    description: string;
}

export type TodoDto = {
    id: string;
    name: string;
    status: string;
    updatedAt: string;
    createdAt: string;
    description: string;
}

class ApiService {
    private client: AxiosInstance;

    constructor(apiClient: AxiosInstance) {
        this.client = apiClient;
    }

    fetchTodos() {
        return this.client.get('/all-todos-from-db');
    }

    createTodo(data: TodoCreateDto) {
        this.client.post('/todos', data);
    }
}

export const todoApiService = new ApiService(http);