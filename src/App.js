import React from 'react';
import './App.css';
import 'antd/dist/antd.min.css';
import TodoList from "./view/TodoList";

function App() {
    return (
        <div className="mar-all">
            <TodoList/>
        </div>
    );
}

export default App;
