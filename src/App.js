import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HOME from './pages/HOME';
import TOPCHARTS from './pages/TOPCHARTS';
import LOGIN from './pages/LOGIN';
import SONGPLAY from './components/SONGPLAY';
import LIBRARY from './pages/LIBRARY';
import YOUTUBE from './pages/YOUTUBE';

function App() {


  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/black_hole_react' Component={LOGIN} name="login"/>
          <Route path='/home' Component={HOME} name="home"/>
          <Route path='/topcharts' Component={TOPCHARTS} name="topcharts"/>
          <Route path='/youtube' Component={YOUTUBE}/>
          <Route path='/library' Component={LIBRARY}/>
          <Route path="/:title" Component={SONGPLAY} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
