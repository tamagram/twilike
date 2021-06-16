import React from 'react';
import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';
import Home from './pages/home/Home';
import StyledHome from './pages/home/Home';

const App: React.FC = () => {
  return (
    <div className="App">
      <StyledHome />
    </div>
  );
}

export default App;
