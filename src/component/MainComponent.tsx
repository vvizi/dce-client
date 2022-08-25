import React, { useState } from 'react';
import { accountDTO, getAccountInfo } from '../repository/accountRepository';
import LoginComponent from './LoginComponent';

//axios.defaults.withCredentials = true;

const MainComponent: React.FC = () => {
  const [userId, setUserId] = useState<string>(''); 
  const [userPassword, setUserPassword] = useState<string>('');

  const getMessage = async() => {
    const dto: accountDTO = {
      userId: userId,
      userPassword: userPassword
    }

    getAccountInfo(dto);
  }

  const handleSetUserId = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserId(e.target.value as string);
  }

  const handleSetUserPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserPassword(e.target.value as string);
  }

  return (
    <div>
      <input type='text' placeholder='아이디 입력' value={userId} onChange={handleSetUserId} />
      <input type='text' placeholder='비밀번호 입력' value={userPassword} onChange={handleSetUserPassword} />
      <button type='button' onClick={getMessage}>click</button>
      <LoginComponent />
    </div>
  )
}

export default MainComponent;
