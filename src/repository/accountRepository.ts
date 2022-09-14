import axios, { AxiosRequestConfig } from 'axios';
import { graphData, topicData } from '../store/AppStore';

const msg={
    "sender": [
            {"name": "받은 메일 Top 1","count":600},
            {"name": "받은 메일 Top 2","count":400},
            {"name": "받은 메일 Top 3","count":380},
            {"name": "받은 메일 Top 4","count":250},
            {"name": "받은 메일 Top 5","count":100}]
    ,
    "ratio":  [
            //{"name": "전체 메일 개수","count":500},
            {"name": "읽은 메일 개수","count":100},
            {"name": "안 읽은 메일 개수","count":400},
            //{"name": "전체 읽은 메일 대비 안 읽은 메일","count":80.00}
        ]
    ,
    "topic":  [
            {"text": "한글 1", "value":100},
            {"text": "한글 2","value":90},
            {"text": "한글 3","value":80},
            {"text": "한글 4","value":70},
            {"text": "한글 5","value":60},
            {"text": "한글 6","value":50},
            {"text": "한글 7","value":40},
            {"text": "한글 8","value":30},
            {"text": "한글 9","value":20},
            {"text": "한글 10","value":10},
            {"text": "english 1","value":50},
            {"text": "english 2","value":40},
            {"text": "english 3","value":30},
            {"text": "english 4","value":20},
            {"text": "english 5","value":10}]
    ,
    "delete":["응암정보도서관<ealibsend@ealib.or.kr>","홍익정보도서관<moneyletter@uppity.co.kr>",
    "강남정보도서관<kr_hotel@trip.com>","석계정보도서관<ealibsend@ealib.or.kr>","태릉정보도서관<moneyletter@uppity.co.kr>",
    "인천정보도서관<kr_hotel@trip.com>","광운정보도서관<ealibsend@ealib.or.kr>","고려정보도서관<moneyletter@uppity.co.kr>",
    "노원정보도서관<kr_hotel@trip.com>","월계정보도서관<ealibsend@ealib.or.kr>"]
}


const axiosConfig: AxiosRequestConfig = {
    baseURL: 'http://localhost:8000/'
}

export interface accountDTO {
    inputId: string;
    inputPassword: string;
    socialId: string;
}

export interface resultDTO {
    sender: Array<graphData>;
    ratio: Array<graphData>;
    topic: Array<topicData>;
    delete: Array<string>;
}

export const getAccountInfo = async(dto: accountDTO) => {
    const url = "http://localhost:8000/"

    const resultMsg: resultDTO = await axios.post(url, dto)
        .then((data) => {
            //return data.data;
            return msg;
        }
        ).catch((error) => {
            console.log(error);
            return msg;
        });
    return resultMsg;
}