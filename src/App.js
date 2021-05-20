import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Profile from './components/Profile/Profile';

function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <Sidebar />
      <main className="app-wrapper-content">
        <Profile />
      </main>
    </div>
  );
}

export default App;
