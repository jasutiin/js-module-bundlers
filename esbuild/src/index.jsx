import ReactDOM from 'react-dom/client';

function App() {
  return (
    <div>
      <h1>Hello from esbuild + React!</h1>
      <p>This is a simple React app without CRA.</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
