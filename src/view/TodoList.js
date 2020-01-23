import React, {Component, Fragment} from "react";
import {Input, Button, List} from "antd";


class TodoList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            input: '',
            list: ['aa', 'bb', 'cc']
        }
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
        this.setState({
            input: e.target.value
        })
    };

    addItem = () => {
        const list = [...this.state.list];
        list.push(this.state.input);
        this.setState({
            list: list,
            input: ''
        })
    };

    deleteItem(index) {
        const list = [...this.state.list];
        list.splice(index, 1);
        this.setState({
            list
        })
    }
}

export default TodoList;