import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Profile from './components/Profile/Profile';
import Messages from './components/Messages/Messages';
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
        <Route
          path="/profile"
          render={() => <Profile state={props.state.profilePage} addPost={props.addPost} updateNewPostText={props.updateNewPostText} />}
        />
        <Route path="/messages" render={() => <Messages state={props.state.messagesPage} />} />
        <Route path="/news" render={News} />
        <Route path="/music" render={Music} />
        <Route path="/options" render={Options} />
      </main>
    </div>
  );
}

export default App;
