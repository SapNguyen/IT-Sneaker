import axios from 'axios';

//console.log(process.env);//kiểm tra đến môi trường

//Custom axios để gọi API cho dễ
const httpRequest = axios.create({
    //baseURL:'https://tiktok.fullstack.edu.vn/api/'
    baseURL: process.env.REACT_APP_BASE_URL,
});
const httpsRequest = axios.create({
    //baseURL:'https://tiktok.fullstack.edu.vn/api/'
    baseURL: process.env.REACT_APP_SNEAKER_BASE_URL,
});

//hàm có async bên ngoài sẽ trả về 1 Promise không đồng bộ (code như này như code đồng bộ)
export const get = async (path, options = {}) => {
    const respone = await httpRequest.get(path, options);
    return respone.data; //giúp không phải .data
};

export const getsneaker = async (path, options = {}) => {
    const respone = await httpsRequest.get(path, options);
    return respone;
};

export default httpRequest;
