import { getAllByPlaceholderText } from '@testing-library/react';
import axios from 'axios';


export interface accountDTO{
    userId: string;
    userPassword: string;
}

export const getAccountInfo = async(dto: accountDTO) => {

    try {
        const data = await axios.get("http://localhost:8000/", {params: dto});
        console.log(data.data);
        return data;
    } catch {
        console.log('잘못됨');
    }
}
