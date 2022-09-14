import { action, makeObservable, observable } from 'mobx';

export interface graphData {
    name: string;
    count: number;
}

export interface topicData {
    text: string;
    value: number;
}

export interface deleteData {
    name: string;
    address: string;
}

class AppStore {
    isLogin: boolean = false;
    senderDataList: Array<graphData> = [];
    ratioDataList: Array<graphData> = [];
    topicDataList: Array<topicData> = [{text: "Loading...", value: 100}];
    deleteDataList: Array<deleteData> = [{name: "Loading", address: "Loading..."}];

    userEmail: string = '';

    constructor() {
        makeObservable(this, {
            isLogin: observable,
            userEmail: observable,
            senderDataList: observable,
            ratioDataList: observable,
            topicDataList: observable,
            deleteDataList: observable,
            setIsLogin: action,
            setSenderDataList: action,
            setRatioDataList: action,
            setTopicDataList: action,
            setDeleteDataList: action
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
    setSenderDataList(senderDataList: Array<graphData>): void {
        this.senderDataList = senderDataList;
    }

    setRatioDataList(ratioDataList: Array<graphData>): void {
        this.ratioDataList = ratioDataList;
    }

    setTopicDataList(topicDataList: Array<topicData>): void {
        this.topicDataList = topicDataList;
    }
    
    setDeleteDataList(deleteDataList: Array<deleteData>): void {
        this.deleteDataList = deleteDataList;
    }
}

export default AppStore;