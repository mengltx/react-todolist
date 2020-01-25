import React from "react";
import {connect} from 'react-redux';
import {input_change, add_item, delete_item} from '../store/action_creator.js';
import {Button, Input, List} from "antd";

const TodoList = (props) => {

    // const {input, list, inputChange, addItem, deleteItem} = props;

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

const mapStateToProps = (state) => {
    return {
        input: state.input,
        list: state.list
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        inputChange(e) {
            const action = input_change(e.target.value);
            dispatch(action)
        },
        addItem() {
            const action = add_item();
            dispatch(action)
        },
        deleteItem(index) {
            const action = delete_item(index);
            dispatch(action)
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)