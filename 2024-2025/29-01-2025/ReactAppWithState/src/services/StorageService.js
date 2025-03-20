export const TODOS_STORAGE_KEY = 'todos';

export class TodosStorageService {
    static save(data) {
        const strData = JSON.stringify(data);
        localStorage.setItem(TODOS_STORAGE_KEY, strData);
    }

    static fetchTodos() {
        const strTodos = localStorage.getItem(TODOS_STORAGE_KEY);

        return new Promise(function(resolve) {
            setTimeout(function() {
                if (!strTodos) {
                    TodosStorageService.save([]);
                    resolve([]);
                    return;
                }
    
                resolve(JSON.parse(strTodos));
            }, 2000)
        })
    }
}
