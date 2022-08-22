import React from 'react';
import axios from 'axios';
import './App.css';

axios.defaults.withCredentials = true;

const App: React.FC = () => {
  const getMessage = async() => {
    axios.get("http://localhost:8000/").then((response) => {
      console.log(response.data);
    }).catch((error) => {
      alert(error);
    });
  }

  return (
    <div>
      hello
      <button type='button' onClick={getMessage}>click</button>
    </div>
  )
}

export default App;
