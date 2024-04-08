export * from "./about-page";
import React from 'react';
import ReactDOM from 'react-dom/client';
import AboutPage from './about-page';

if(window.createMfeContainerInShell) {
  window.createMfeContainerInShell('about-root');
}

const root = ReactDOM.createRoot(document.getElementById('about-root'));
root.render(
  <React.StrictMode>
    <AboutPage />
  </React.StrictMode>
);
