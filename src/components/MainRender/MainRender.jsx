import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import style from './MainRender.modules.css';
import Profile from './Profile/Profile';
import Messages from './Messages/Messages';
import News from './News/News';
import Music from './Music/Music';
import Settings from './Settings/Settings';


const MainRender = (props) => {
  return (
    <BrowserRouter>
      <div className={style.item}>
        <Routes>
          <Route path='/profile' element={<Profile />} />
          <Route path='/messages' element={<Messages />} />
          <Route path='/news' element={<News />} />
          <Route path='/music' element={<Music />} />
          <Route path='/settings' element={<Settings />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}


export default MainRender;
