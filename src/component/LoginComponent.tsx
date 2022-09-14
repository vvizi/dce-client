import React, { useState } from 'react';
import { observer } from 'mobx-react-lite';
import useStore from '../store/useStore';
import classNames from 'classnames';
import { accountDTO, getAccountInfo, resultDTO } from '../repository/accountRepository';
import { ReactComponent as Theme } from '../assets/theme.svg';
import CautionTooltipComponent from './CautionTooltipComponent';
import '../style/Login.css';

const RadioType = ['Google', 'Naver', 'Daum'] as const;

type socialType = typeof RadioType[number];

const RadioMap : Record<socialType , string> = {
    Google: 'gmail.com',
    Naver: 'naver.com',
    Daum: 'hanmail.net'
}

const LoginComponent = (): JSX.Element => {
    const { appStore } = useStore();
    const [inputId, setInputId] = useState<string>('');
    const [inputPw, setInputPw] = useState<string>('');
    const [checkRadio, setCheckRadio] = useState<socialType>('Google');
    const userEmail = `${inputId}@${RadioMap[checkRadio]}`

    const handleInputId = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputId(e.target.value);
    };

    const handleInputPw = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputPw(e.target.value);
    };

    const handleRadioBtnClick = (item: socialType) => {
        setCheckRadio(item);
    };

    const handleClickStartBtn = async() => {
        appStore.setIsLogin();
        appStore.setUserEmail(userEmail);
        const accountDTO: accountDTO = {
            inputId: userEmail,
            inputPassword: inputPw,
            socialId: checkRadio.toUpperCase()
        }
        const resultData: resultDTO = await getAccountInfo(accountDTO);

        setReultData(resultData);
    }

    const setReultData = (resultData: resultDTO) => {
        // sender, ratio, topic, delete
        appStore.setSenderDataList(resultData.sender);
        appStore.setRatioDataList(resultData.ratio);
        appStore.setTopicDataList(resultData.topic);
    }

    return (
        <div className="login">
            <div className="login-left">
                <Theme width="100%" height="80%" />
                <div className="theme-label">디지털 탄소 배출을 줄이기 위해 우리 모두 동참해요.</div>
            </div>
            <div className="login-right">
                <p className="login-title">
                    Welcome
                    <CautionTooltipComponent />
                </p>
                <form className="login-form">
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
                <form className="radio-form">
                    {RadioType.map(item => (
                        <label key={item}>
                            <input
                                type="radio"
                                id="item"
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
                    onClick={handleClickStartBtn}
                >
                    <p>START</p>
                </button>
            </div>
        </div>
    );
};

export default observer(LoginComponent);