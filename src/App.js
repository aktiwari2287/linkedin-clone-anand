import React from 'react';
import Header from './Header'
import './App.css';
import Sidebar from "./Sidebar"
function App() {
  return (
    <div className="App">
        <Header></Header>
        <div className="app_body">
          <Sidebar/>
        </div>
    </div>
  );
}

export default App;
