import React from 'react';
import { getAccountInfo } from './repository/accountRepository';
import './App.css';

//axios.defaults.withCredentials = true;

const App: React.FC = () => {
  const getMessage = async() => {
    getAccountInfo();
  }
  return (
    <div>
      hello
      <button type='button' onClick={getMessage}>click</button>
    </div>
  )
}

export default App;
