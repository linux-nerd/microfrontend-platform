export * from "./App";
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

if(window.createMfeContainerInShell) {
  window.createMfeContainerInShell('about-root');
}

const root = ReactDOM.createRoot(document.getElementById('about-root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
