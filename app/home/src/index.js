export * from "./home-page";
import React from 'react';
import ReactDOM from 'react-dom/client';
import HomePage from './home-page';

if(window.createMfeContainerInShell) {
  window.createMfeContainerInShell('home-root');
}

const root = ReactDOM.createRoot(document.getElementById('home-root'));
root.render(
  <React.StrictMode>
    <HomePage />
  </React.StrictMode>
);

