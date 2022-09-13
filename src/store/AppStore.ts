import { action, makeObservable, observable } from 'mobx';

class AppStore {
    isLogin: boolean = false;

    userEmail: string = '';

    constructor() {
        makeObservable(this, {
            isLogin: observable,
            userEmail: observable,
        });
    }

    setIsLogin(): void {
        this.isLogin = true;
    }

    getUserEmail() {
        return this.userEmail;
    }

    setUserEmail(userEmail:string): void {
        this.userEmail = userEmail;
    }
}

export default AppStore;