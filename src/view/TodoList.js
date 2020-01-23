import React, {Component, Fragment} from "react";
import {Input, Button, List} from "antd";
import { store } from '../store/index.js';


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
            <Fragment>
                <Input
                    style={{width: '400px'}}
                    value={this.state.input}
                    onChange={this.inputChange}
                />
                <Button
                    className='mar-hor'
                    type='primary'
                    onClick={this.addItem}>Add</Button>
                <List
                    className='mar-ver'
                    size="small"
                    bordered
                    dataSource={this.state.list}
                    renderItem={
                        (item, index) => <List.Item onClick={() => {this.deleteItem(index)}}>{index}.{item}</List.Item>
                    }
                />
            </Fragment>
        )
    }

    inputChange = (e) => {
        const action = {
            type: 'INPUT_CHANGE',
            value: e.target.value
        };
        store.dispatch(action);
    };

    addItem = () => {
        const action = {
            type: 'ADD_ITEM',
            value: this.state.input
        };
        store.dispatch(action);
    };

    deleteItem(index) {
        const action = {
            type: 'DELETE_ITEM',
            index
        };
        store.dispatch(action);
    }
}

export default TodoList;