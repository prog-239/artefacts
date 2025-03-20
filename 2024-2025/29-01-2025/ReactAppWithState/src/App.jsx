import React from 'react';
import '@radix-ui/themes/styles.css';
import { Theme } from "@radix-ui/themes";

import './TodoStyles.css';
import { TodoList } from './components/TodoList';

function App() {
    return (
        <Theme>
            <div class="app">
                <TodoList />
            </div>
        </Theme>
    );
}

export default App;
