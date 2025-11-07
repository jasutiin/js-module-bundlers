import ReactDOM from 'react-dom/client';
import React from 'react'; // need this import even though it's not explicitly used

new EventSource('/esbuild').addEventListener('change', () => location.reload());

function App() {
  return (
    <div>
      <h1>Hello from esbuild + React!</h1>
      <p>This is a simple React app wihout CRA.</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
