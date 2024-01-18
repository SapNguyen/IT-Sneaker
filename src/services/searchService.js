import * as httpRequest from '~/ultils/httpRequest';

export const search = async (name) => {
    //CÓ GÌ KHÓ HIỂU XEM LẠI FILE ULTILS/REQUEST
    //dùng axios hơn fetch thì đỡ khỏi nối chuỗi
    //await luôn đúng trước promise
    try {
        const res = await httpRequest.getsneaker('product/name', {
            params: {
                name,
            },
        });
        return res.data;
    } catch (error) {
        console.log(error);
    }
};

