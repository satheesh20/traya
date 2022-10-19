import axios from 'axios';
import { GET_CONTENTS } from '../constants/apiUrls';

export const getContents =async () => {
    const res = await axios.get(GET_CONTENTS);
    const {data}=res;
    return data.data.results;
}

export const deleteContents =async (id:string) => {
    const url = `${GET_CONTENTS}/${id}`;
    const res = await axios.delete(url);
    return res;
}