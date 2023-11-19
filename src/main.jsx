import React from 'react';
import ReactDOM from 'react-dom/client';
import { restaurants } from './__mocks__/mock-restaurants';
import { App } from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <App restaurants={restaurants} />
);
