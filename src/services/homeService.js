import * as httpRequest from '~/ultils/httpRequest';

export const home = async () => {
    try {
        const res = await httpRequest.getsneaker('home');
        return res.data;
    } catch (error) {
        console.log(error);
    }
};

export const imghome = async () => {
    try {
        const res = await httpRequest.getsneaker('user/home');
        return res.data;
    } catch (error) {
        console.log(error);
    }
};

export const imgbanner = async () => {
    try {
        const res = await httpRequest.getsneaker('user/banner');
        return res.data;
    } catch (error) {
        console.log(error);
    }
};

export const imglogo = async () => {
    try {
        const res = await httpRequest.getsneaker('user/logo');
        return res.data;
    } catch (error) {
        console.log(error);
    }
};

export const homeproduct = async () => {
    //CÓ GÌ KHÓ HIỂU XEM LẠI FILE ULTILS/REQUEST
    //dùng axios hơn fetch thì đỡ khỏi nối chuỗi
    //await luôn đúng trước promise
    try {
        const res = await httpRequest.getsneaker('detailproduct');
        return res.data;
    } catch (error) {
        console.log(error);
    }
};

export const imgproduct = async (q) => {
    //CÓ GÌ KHÓ HIỂU XEM LẠI FILE ULTILS/REQUEST
    //dùng axios hơn fetch thì đỡ khỏi nối chuỗi
    //await luôn đúng trước promise
    try {
        const res = await httpRequest.getsneaker('imgproduct', {
            params: {
                q,
            },
        });
        return res.data;
    } catch (error) {
        console.log(error);
    }
};