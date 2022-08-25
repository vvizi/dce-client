import axios, { AxiosRequestConfig } from 'axios';

const axiosConfig: AxiosRequestConfig = {
    baseURL: 'http://localhost:8000/'
}

export interface accountDTO{
    inputId: string;
    inputPassword: string;
}

export const getAccountInfo = async(dto: accountDTO) => {
    const url = "http://localhost:8000/"

    await axios.post(url, dto)
        .then((data) => {
            console.log(data.data);
            return data.data;
        }
        ).catch((error) => {
            console.log(error)
        })
}
