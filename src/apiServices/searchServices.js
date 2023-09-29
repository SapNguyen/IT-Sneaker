import * as request from '~/ultils/request';

export const search = async (q,type = 'less') => {
    //CÓ GÌ KHÓ HIỂU XEM LẠI FILE ULTILS/REQUEST
    //dùng axios hơn fetch thì đỡ khỏi nối chuỗi
    //await luôn đúng trước promise
    try {
        const res = await request.get('users/search', {
            params: {
                q,
                type,
            },
        });
        return res.data

    } catch (error) {
        console.log(error);
    }
};