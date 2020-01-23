import {INPUT_CHANGE, ADD_ITEM, DELETE_ITEM} from '../store/action_types.js';

const defaultState = {
    input: '',
    list: [11, 22, 33, 44],
};

export const reducer = (state=defaultState, action) => {
    const newState = JSON.parse(JSON.stringify(state));
    switch (action.type) {
        case INPUT_CHANGE:
            newState.input = action.value;
            return newState;
        case ADD_ITEM:
            newState.list.push(action.value);
            newState.input = '';
            return newState;
        case DELETE_ITEM:
            newState.list.splice(action.index, 1);
            return newState;
        default:
            return state
    }
};
