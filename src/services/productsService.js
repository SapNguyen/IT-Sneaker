import * as httpRequest from '~/ultils/httpRequest';

export const products = async () => {
    //CÓ GÌ KHÓ HIỂU XEM LẠI FILE ULTILS/REQUEST
    //dùng axios hơn fetch thì đỡ khỏi nối chuỗi
    //await luôn đúng trước promise
    try {
        const res = await httpRequest.getsneaker('products');
        return res.data;
    } catch (error) {
        console.log(error);
    }
};

export const detailproduct = async () => {
    //CÓ GÌ KHÓ HIỂU XEM LẠI FILE ULTILS/REQUEST
    //dùng axios hơn fetch thì đỡ khỏi nối chuỗi
    //await luôn đúng trước promise
    try {
        const res = await httpRequest.getsneaker('productdetails');
        return res.data;
    } catch (error) {
        console.log(error);
    }
};

export const productforbrand = async (q) => {
    //CÓ GÌ KHÓ HIỂU XEM LẠI FILE ULTILS/REQUEST
    //dùng axios hơn fetch thì đỡ khỏi nối chuỗi
    //await luôn đúng trước promise
    try {
        const res = await httpRequest.getsneaker('products',{
            params:{
                q,
            },
        });
        return res.data;
    } catch (error) {
        console.log(error);
    }
};
