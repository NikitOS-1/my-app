import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import MainRender from './components/MainRender/MainRender';

const App = (props) => {
  return (
    <div className='app-wrapper'>
      <Header />
      <Navbar />
      <div className='content'>
        <MainRender />
      </div>
    </div>
  )
}


export default App;
