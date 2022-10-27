import React from 'react'
import './App.css';
import Content from './components/Content';
import Header from './components/Header';
import Sidebar from './components/Sidebar';


const  App = () => {
  return (
    <div className="app-wrapper">
      <Header/>
      <Sidebar/>
      <Content/>      
    </div>
  );
}

export default App;




