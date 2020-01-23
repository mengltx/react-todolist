import React from "react";
import {Button, Input, List} from "antd";

const TodoListStateless = (props) => {
    return (
        <div>
            <Input
                style={{width: '400px'}}
                value={props.input}
                onChange={props.inputChange}
            />
            <Button
                className='mar-hor'
                type='primary'
                onClick={props.addItem}>Add</Button>
            <List
                className='mar-ver'
                size="small"
                bordered
                dataSource={props.list}
                renderItem={
                    (item, index) => <List.Item onClick={() => {props.deleteItem(index)}}>{index} : {item}</List.Item>
                }
            />
        </div>
    )
};

export default TodoListStateless;

