// App.js
import React from 'react';
import './App.css'; // Import your CSS file here if you have any
import Dashboard from './components/Dashboard';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Customizable Dashboard App</h1>
      </header>
      <main>
        <Dashboard />
      </main>
    </div>
  );
}

export default App;
