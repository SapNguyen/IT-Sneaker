import * as httpRequest from '~/ultils/httpRequest';

export const brands = async () => {
    //CÓ GÌ KHÓ HIỂU XEM LẠI FILE ULTILS/REQUEST
    //dùng axios hơn fetch thì đỡ khỏi nối chuỗi
    //await luôn đúng trước promise
    try {
        const res = await httpRequest.getsneaker('brands');
        return res.data;
    } catch (error) {
        console.log(error);
    }
};

export const banners = async () => {
    //CÓ GÌ KHÓ HIỂU XEM LẠI FILE ULTILS/REQUEST
    //dùng axios hơn fetch thì đỡ khỏi nối chuỗi
    //await luôn đúng trước promise
    try {
        const res = await httpRequest.getsneaker('brands/banner');
        return res.data;
    } catch (error) {
        console.log(error);
    }
};

export const imghomes = async () => {
    //CÓ GÌ KHÓ HIỂU XEM LẠI FILE ULTILS/REQUEST
    //dùng axios hơn fetch thì đỡ khỏi nối chuỗi
    //await luôn đúng trước promise
    try {
        const res = await httpRequest.getsneaker('brands/home');
        return res.data;
    } catch (error) {
        console.log(error);
    }
};

export const brandtitle = async (brand_name) => {
    //CÓ GÌ KHÓ HIỂU XEM LẠI FILE ULTILS/REQUEST
    //dùng axios hơn fetch thì đỡ khỏi nối chuỗi
    //await luôn đúng trước promise
    try {
        const res = await httpRequest.getsneaker('/detail/brand', {
            params: {
                brand_name,
            },
        });
        return res.data;
    } catch (error) {
        console.log(error);
    }
};
