import React from 'react';
import { Provider } from 'react-redux';
import store from './store/store.js';
import App from './App.jsx';

import { createRoot } from 'react-dom/client';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

