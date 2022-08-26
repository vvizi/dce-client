import React from 'react';
import ReactDOM from 'react-dom/client';
import RootStore, { StoreProvider } from './store/RootStore';

import MainComponent from './component/MainComponent';

import './index.css';

const store = new RootStore();

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <StoreProvider value={store}>
        <MainComponent />
    </StoreProvider>
);