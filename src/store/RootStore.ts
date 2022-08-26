import { createContext } from 'react';
import AppStore from './AppStore';

/**
 * 최상위 store
 */
class RootStore {
    appStore: AppStore;

    constructor() {
        this.appStore = new AppStore();
    }
}

export const StoreContext = createContext<RootStore>({} as RootStore);

export const StoreProvider = StoreContext.Provider;

export default RootStore;