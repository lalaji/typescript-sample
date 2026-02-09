import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';

// TypeScript ensures that the element with id 'root' actually exists (or handles null)
const rootElement = document.getElementById('root')!; // The '!' asserts that this is not null

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    {/* TypeScript checks these props against the interface in App.tsx */}
    <App name="Developer" year={2026} />
  </React.StrictMode>,
);