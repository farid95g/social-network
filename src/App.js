import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import ProfileContainer from './components/Profile/ProfileContainer';
import MessagesContainer from './components/Messages/MessagesContainer';
import News from './components/News/News';
import Music from './components/Music/Music';
import Options from './components/Options/Options';
import UsersContainer from "./components/Users/UsersContainer";
import { Route } from "react-router-dom";

function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <Sidebar />
      <main className="app-wrapper-content">
        <Route path="/profile/:userId?" render={() => <ProfileContainer />} />
        <Route path="/messages" render={() => <MessagesContainer />} />
        <Route path="/users" render={() => <UsersContainer />} />
        <Route path="/news" render={News} />
        <Route path="/music" render={Music} />
        <Route path="/options" render={Options} />
      </main>
    </div>
  );
}

export default App;
