import { action, makeObservable, observable } from 'mobx'

class AppStore {
  isLogin: boolean = false

  constructor() {
    makeObservable(this, {
      isLogin: observable,
    })
  }

  setIsLogin(): boolean {
    return this.isLogin = true;
  }

}

export default AppStore