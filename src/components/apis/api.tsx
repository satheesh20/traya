import axios from 'axios';

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL as string;
const resolveUrl = (path: string) => `${baseUrl}${path}`;

export const api = {
    contents:{
        getContents:async () => {
            const url = resolveUrl(`/contents`);
            const res = await axios.get(url);
            const {data}=res;
            return data.data.results;
        },
        deleteContent:async (id:string) => {
            const url =resolveUrl(`/contents/:${id}`);
            const res = axios.delete(url);
            return res;
        }
    }
}