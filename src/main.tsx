import React from 'react';
// @ts-ignore
import { createRoot } from 'react-dom';
import 'tailwindcss/tailwind.css';
import './index.css';
import App from './App';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
