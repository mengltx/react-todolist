const defaultState = {
    input: '',
    list: [11, 22, 33, 44],
};

export const reducer = (state=defaultState, action) => {
    const newState = JSON.parse(JSON.stringify(state));
    switch (action.type) {
        case 'INPUT_CHANGE':
            console.log('INPUT_CHANGE', action.value);
            newState.input = action.value;
            return newState;
        case 'ADD_ITEM':
            console.log('ADD_ITEM', action.value);
            newState.list.push(action.value);
            return newState;
        case 'DELETE_ITEM':
            console.log('DELETE_ITEM', action.index);
            newState.list.splice(action.index, 1);
            return newState;
        default:
            return state
    }
};
