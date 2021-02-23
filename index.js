'use strict'
// import { createStore } from 'redux';

const { createStore } = Redux;

console.log('App Started');

const defaultState = {
    balance: 0,
}

const actionIncrement = (amount) => {
    return {
        type: 'increment',
        payload: amount
    }
}

const actionDecrement = (amount) => {
    return {
        type: 'decrement',
        payload: amount
    }
}

// REDUCER
const account = (state=defaultState, action) => {
    console.log("action is:", action);
    switch (action.type) {
        case 'increment':
            return {
                balance: state.balance + action.payload,
            };
        case 'decrement':
            return {
                balance: state.balance - action.payload,
            };
        default:
            return state;
    }
}

const store = createStore(account, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

store.subscribe(() => {
    console.log('subscribing to state changes...');
    const state = store.getState();
    console.log("the state is:", state);
    const balance = document.querySelector('#balance');
    balance.innerHTML = state.balance;
});

const incrementButton = document.querySelector('#add');
const decrementButton = document.querySelector('#subtract');
const amount = document.querySelector('#amount');

incrementButton.addEventListener('click', (e) => {
    e.preventDefault();
    console.log("amount to increment is:", amount.value);
    const amountValue = parseInt(amount.value);
    store.dispatch(actionIncrement(amountValue));
});

decrementButton.addEventListener('click', (e) => {
    e.preventDefault();
    const amountValue = parseInt(amount.value);
    store.dispatch(actionDecrement(amountValue));
});

