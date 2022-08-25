import React from 'react';
import { ReactComponent as Theme } from "../assets/theme.svg";

import '../style/Login.css';

const LoginComponent = (): JSX.Element => {
  return (
    <div className='login'>
      <div className='login-left'>
        <Theme />
      </div>
      <div className='login-right'>
        //
      </div>
    </div>
  );
};

export default LoginComponent;

