import * as httpRequest from '~/ultils/httpRequest';

export const user = async (id) => {
    //CÓ GÌ KHÓ HIỂU XEM LẠI FILE ULTILS/REQUEST
    //dùng axios hơn fetch thì đỡ khỏi nối chuỗi
    //await luôn đúng trước promise
    try {
        const res = await httpRequest.getsneaker('detail/user', {
            params: {
                id,
            },
        });
        return res.data;
    } catch (error) {
        console.log(error);
    }
};
