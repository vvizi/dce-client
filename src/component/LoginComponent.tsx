import React, { useState } from 'react';
import classNames from 'classnames';
import { ReactComponent as Theme } from '../assets/theme.svg';

import '../style/Login.css';

const RadioMap = ['Google', 'Naver', 'Daum'];

const LoginComponent = (): JSX.Element => {
    const [inputId, setInputId] = useState<string>('');
    const [inputPw, setInputPw] = useState<string>('');
    const [checkRadio, setCheckRadio] = useState<string>('Google');

    const handleInputId = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputId(e.target.value);
    };

    const handleInputPw = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputPw(e.target.value);
    };

    const handleRadioBtnClick = (item: string) => {
        setCheckRadio(item);
    };

    return (
        <div className="login">
            <div className="login-left">
                <Theme width="692px" height="620px" />
                <p className="login-left-label">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod <br /> tempor incididunt ut
                    labore et dolore magna aliqua. Ut enim ad minim
                </p>
            </div>
            <div className="login-right">
                <p className="login-title">Welcome</p>
                <form action="" className="login-form">
                    <input
                        type="text"
                        className="login-input"
                        placeholder="ID"
                        value={inputId}
                        onChange={handleInputId}
                    />
                    <input
                        type="password"
                        className="login-input"
                        placeholder="Password"
                        value={inputPw}
                        onChange={handleInputPw}
                    />
                </form>
                <form action="" className="radio-form">
                    {RadioMap.map(item => (
                        <label>
                            <input
                                type="radio"
                                id="item"
                                key={item}
                                value={item}
                                checked={checkRadio === item}
                                onClick={() => handleRadioBtnClick(item)}
                            />
                            {item}
                        </label>
                    ))}
                </form>
                <button
                    type="button"
                    className={classNames({ 'login-btn': true, 'login-btn--active': inputId && inputPw })}
                >
                    <p>START</p>
                </button>
            </div>
        </div>
    );
};

export default LoginComponent;