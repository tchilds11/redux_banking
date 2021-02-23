'use strict'
import { createStore } from 'redux';

console.log('App Started');

const defaultState = {
    balance: 0
}

const actionIncrement = {
    type: 'incrememt'
}

const actionDecrement = {
    type: 'decrememt'
}

const account = (state = defaultState, action) => {
    switch (action.type) {
        case 'Increment':
            return {
                balance: state.balance + 1,
            };
        case 'Decrement':
            return {
                balance: state.balance -1,
            };
        default:
            return state;
    }
}

const store = createStore(account);

store.subscribe(() => {
    console.log('subscribing to state changes...');
    const state = store.getState();
    console.log("the state is:", state);
});

store.dispatch(actionIncrement);

export default store;