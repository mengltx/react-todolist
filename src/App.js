import React, {Component} from 'react';
import './App.css';
import 'antd/dist/antd.min.css';
import TodoList from "./view/TodoList";
import {Provider} from "react-redux";
import store from "./store/index.js";
import {get_init_data} from "./store/action_creator";

class App extends Component {
    render() {
        return (
            <div className="mar-all">
                <Provider store={store}>
                    <TodoList />
                </Provider>
            </div>
        );
    }

    componentDidMount() {
        store.dispatch(get_init_data())
    }
}

export default App;
