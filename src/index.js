import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux'; // обертка App.js для его доступа к Store
import store from './store'; // может называться как угодно потому что export default
import './index.css';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

