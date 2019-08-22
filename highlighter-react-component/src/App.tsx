import React from 'react';
import logo from './logo.svg';
import './App.css';
import Dummy  from './components/dummy/index'
import './styles/tailwind.scss'

const App: React.FC = () => {
  return (
    <div className="App">
      This is main
      <Dummy></Dummy>
    </div>
  );
}

export default App;
