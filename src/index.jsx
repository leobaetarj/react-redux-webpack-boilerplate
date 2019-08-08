import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import PropTypes from 'prop-types';

const ShoppingList = ({ name }) => (
  <div className="shopping-list">
    <h1>{`Lista de compras para ${name}`}</h1>
    <ul>
      <li>Instagram</li>
      <li>WhatsApp</li>
      <li>Oculus</li>
    </ul>
  </div>
);

ShoppingList.propTypes = {
  name: PropTypes.string.isRequired,
};

ReactDOM.render(<ShoppingList name="John Doe" />, document.getElementById('root'));

function counter(state = 0, action) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
}

const store = createStore(counter);

store.subscribe(() => console.log(store.getState()));
store.dispatch({ type: 'INCREMENT' }); // => 1
store.dispatch({ type: 'INCREMENT' }); // => 2
store.dispatch({ type: 'DECREMENT' }); // => 1

module.hot.accept();
