import React, {Component} from "react";
import {Button, Input, List} from "antd";

class TodoListUI extends Component {
    render() {
        return (
            <div>
                <Input
                    style={{width: '400px'}}
                    value={this.props.input}
                    onChange={this.props.inputChange}
                />
                <Button
                    className='mar-hor'
                    type='primary'
                    onClick={this.props.addItem}>Add</Button>
                <List
                    className='mar-ver'
                    size="small"
                    bordered
                    dataSource={this.props.list}
                    renderItem={
                        (item, index) => <List.Item onClick={() => {this.props.deleteItem(index)}}>{index} - {item}</List.Item>
                    }
                />
            </div>
        )
    }
}

export default TodoListUI;

