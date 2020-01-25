
import {INPUT_CHANGE, ADD_ITEM, DELETE_ITEM, INIT_DATA, GET_INIT_DATA} from '../store/action_types.js';

export const input_change = (value) => ({
    type: INPUT_CHANGE,
    value
});

export const add_item = (value) => ({
    type: ADD_ITEM,
    value
});

export const delete_item = (index) => ({
    type: DELETE_ITEM,
    index
});

export const init_data = (data) => ({
    type: INIT_DATA,
    data
});

export const get_init_data = (data) => ({
    type: GET_INIT_DATA
});


