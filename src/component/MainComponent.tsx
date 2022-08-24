import React from 'react';
import axios from 'axios';

import LoginComponent from './LoginComponent';

axios.defaults.withCredentials = true;

const MainComponent: React.FC = () => {
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
      <LoginComponent />
    </div>
  )
}

export default MainComponent;
