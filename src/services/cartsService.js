import * as httpRequest from '~/ultils/httpRequest';

export const cartuser = async (id) => {
    //CÓ GÌ KHÓ HIỂU XEM LẠI FILE ULTILS/REQUEST
    //dùng axios hơn fetch thì đỡ khỏi nối chuỗi
    //await luôn đúng trước promise
    try {
        const res = await httpRequest.getsneaker('cart/user', {
            params: {
                id,
            },
        });
        return res.data;
    } catch (error) {
        console.log(error);
    }
};
