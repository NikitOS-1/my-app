import React from 'react';
import './App.css';

const App = () => {
  return (
    <div className='app-wrapper'>
      <header className='header'>
        <img src='https://w7.pngwing.com/pngs/240/131/png-transparent-logo-lion-red-gradient-lionhead-animals-sport-heart.png'></img>
      </header>
      <nav className='nav'>
        <a href='#'>Message</a>
        <a href='#'>Profile</a>
        <a href='#'>News</a>
        <a href='#'>Post</a>
      </nav>
      <div className='content'>
        <p>Text</p>
      </div>
    </div>
  );
};


export default App;
