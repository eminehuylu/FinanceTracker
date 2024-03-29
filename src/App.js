import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar/navbar'; 
import EditModal from './EditModal/EditModal'; 
import Sidebar from './Sidebar/Sidebar';
import Operations from './Operation/Operation';
import EntranceModal from './EntranceModal/EntranceModal';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Navbar /> {/* Navbar bileşenini kullanım */}
        <EditModal /> {/* EditModal bileşenini kullanım */}
        <Sidebar/>
        <Operations/>
        <EntranceModal/>
      </header>
    </div>
  );
}

export default App;
