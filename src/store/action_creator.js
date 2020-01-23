
import {INPUT_CHANGE, ADD_ITEM, DELETE_ITEM} from '../store/action_types.js';

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

