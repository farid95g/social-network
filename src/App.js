import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Profile from './components/Profile/Profile';
import MessagesContainer from './components/Messages/MessagesContainer';
import News from './components/News/News';
import Music from './components/Music/Music';
import Options from './components/Options/Options';
import { Route } from "react-router-dom";

function App(props) {
  return (
    <div className="app-wrapper">
      <Header />
      <Sidebar />
      <main className="app-wrapper-content">
        <Route path="/profile" render={() => <Profile store={props.store} />} />
        <Route path="/messages" render={() => <MessagesContainer store={props.store} />} />
        <Route path="/news" render={News} />
        <Route path="/music" render={Music} />
        <Route path="/options" render={Options} />
      </main>
    </div>
  );
}

export default App;
