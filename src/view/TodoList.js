import React, {Component} from "react";
import { store } from '../store/index.js';
import {input_change, add_item, delete_item} from '../store/action_creator.js';
import TodoListStateless from "./TodoListStateless";
import {get_init_data} from "../store/action_creator";



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
        store.dispatch(get_init_data());
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