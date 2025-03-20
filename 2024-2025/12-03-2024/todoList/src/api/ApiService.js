import { httpClient } from "./httpClient";

export class ApiService {
    static getTodos() {
        return httpClient.get("/todos");
    }

    static getTodoById(id) {
        return httpClient.get(`/todos/${id}`);
    }

    // data - { name, description }
    static createTodo(data) {
        // { data: data } -> { data }
        return httpClient.post("/todos", {
            data
        });
    }

    static updateTodo(id, data) {
        // Пример создания апиклиента на fetch 
        // return fetch(`/todos/${id}`, {
        //     method: "PUT",
        //     body: JSON.stringify(data),
        //     headers: { "Content-type": "application/json" }
        // }).then((res) => res.json());

        return httpClient.put(`/todos/${id}`, { data });
    }

    static removeTodo(id) {
        return httpClient.delete(`/todos/${id}`);
    }
}
