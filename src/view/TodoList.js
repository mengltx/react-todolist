import React, {Component, Fragment} from "react";
import { store } from '../store/index.js';
import axios from 'axios';
import {input_change, add_item, delete_item} from '../store/action_creator.js';
import TodoListUI from "./TodoListUI";
import TodoListStateless from "./TodoListStateless";
import {init_data} from "../store/action_creator";



class TodoList extends Component {

    constructor(props) {
        super(props);
        this.state = store.getState();
        store.subscribe(() => {
            this.setState(store.getState());
        });
    }

    render() {
        return (
            <TodoListStateless
                input={this.state.input}
                list={this.state.list}
                inputChange={this.inputChange}
                addItem={this.addItem}
                deleteItem={(index) => this.deleteItem(index)}
            />
        )
    }

    componentDidMount() {
        axios.get('/list.json').then((response) => {
            store.dispatch(init_data(response.data));
        }).catch(error => {
            console.log(error);
        });
    }

    inputChange = (e) => {
        store.dispatch(input_change(e.target.value));
    };

    addItem = () => {
        store.dispatch(add_item(this.state.input));
    };

    deleteItem(index) {
        store.dispatch(delete_item(index));
    }
}

export default TodoList;