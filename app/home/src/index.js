export * from "./App";
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

if(window.createMfeContainerInShell) {
  window.createMfeContainerInShell('home-root');
}

const root = ReactDOM.createRoot(document.getElementById('home-root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

