//react
import React from 'react';
import ReactDOM from 'react-dom';

//components
import App from './App';

//libraries
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

//redux
import { artReducer } from './redux/artReducer';

//styling
import './index.css';




const store = createStore(artReducer)


//any child component of the provider(a higher order component) has the potential to connect directly to the store that is being passed to the provider component in a prop called store created above.
ReactDOM.render(
  <Provider store={store}> 
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);






//do i need?
import reportWebVitals from './reportWebVitals';
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
