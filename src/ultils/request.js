import axios from "axios"

//Custom axios để gọi API cho dễ
const request = axios.create({
    baseURL:'https://tiktok.fullstack.edu.vn/api/'
})

//hàm có async bên ngoài sẽ trả về 1 Promise không đồng bộ (code như này như code đồng bộ)
export const get = async (path, options = {}) => {
    const respone = await request.get(path,options);
    return respone.data;//giúp không phải .data
}

export default request