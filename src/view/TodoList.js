import React, {Component, Fragment} from "react";
import {Input, Button, List} from "antd";
import { store } from '../store/index.js';
import {input_change, add_item, delete_item} from '../store/action_creator.js';


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