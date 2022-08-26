import { action, makeObservable, observable } from 'mobx';

class AppStore {
    isLogin: boolean = false;

    constructor() {
        makeObservable(this, {
            isLogin: observable,
        });
    }

    setIsLogin(): void {
        this.isLogin = true;
    }
}

export default AppStore;