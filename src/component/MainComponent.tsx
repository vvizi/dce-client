import React from 'react';
import { observer } from 'mobx-react-lite';
import useStore from '../store/useStore';
import DashboardComponent from './DashboardComponent';
import LoginComponent from './LoginComponent';

const MainComponent: React.FC = () => {
    const { appStore } = useStore();

    return <>{appStore.isLogin ? <DashboardComponent /> : <LoginComponent />}</>;
};

export default observer(MainComponent);