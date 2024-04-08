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

export const productforbrand = async (brand_name, sx, price, page) => {
    //CÓ GÌ KHÓ HIỂU XEM LẠI FILE ULTILS/REQUEST
    //dùng axios hơn fetch thì đỡ khỏi nối chuỗi
    //await luôn đúng trước promise
    try {
        const res = await httpRequest.getsneaker('/brand/products', {
            params: {
                brand_name,
                sx,
                price,
                page,
            },
        });
        return res.data;
    } catch (error) {
        console.log(error);
    }
};

export const productforgenre = async (genre, brand_name, sx, price, page) => {
    //CÓ GÌ KHÓ HIỂU XEM LẠI FILE ULTILS/REQUEST
    //dùng axios hơn fetch thì đỡ khỏi nối chuỗi
    //await luôn đúng trước promise
    try {
        const res = await httpRequest.getsneaker('/genre/products', {
            params: {
                genre,
                brand_name,
                sx,
                price,
                page,
            },
        });
        return res.data;
    } catch (error) {
        console.log(error);
    }
};

export const productfordnew = async (brand_name, sx, price, page) => {
    //CÓ GÌ KHÓ HIỂU XEM LẠI FILE ULTILS/REQUEST
    //dùng axios hơn fetch thì đỡ khỏi nối chuỗi
    //await luôn đúng trước promise
    try {
        const res = await httpRequest.getsneaker('/new/products', {
            params: {
                brand_name,
                sx,
                price,
                page,
            },
        });
        return res.data;
    } catch (error) {
        console.log(error);
    }
};

export const productfordiscount = async (brand_name, sx, price, page) => {
    //CÓ GÌ KHÓ HIỂU XEM LẠI FILE ULTILS/REQUEST
    //dùng axios hơn fetch thì đỡ khỏi nối chuỗi
    //await luôn đúng trước promise
    try {
        const res = await httpRequest.getsneaker('/incentives/products', {
            params: {
                brand_name,
                sx,
                price,
                page,
            },
        });
        return res.data;
    } catch (error) {
        console.log(error);
    }
};

export const detail = async (id) => {
    //CÓ GÌ KHÓ HIỂU XEM LẠI FILE ULTILS/REQUEST
    //dùng axios hơn fetch thì đỡ khỏi nối chuỗi
    //await luôn đúng trước promise
    try {
        const res = await httpRequest.getsneaker('product/detail', {
            params: {
                id,
            },
        });
        return res.data;
    } catch (error) {
        console.log(error);
    }
};

export const similar = async (id) => {
    //CÓ GÌ KHÓ HIỂU XEM LẠI FILE ULTILS/REQUEST
    //dùng axios hơn fetch thì đỡ khỏi nối chuỗi
    //await luôn đúng trước promise
    try {
        const res = await httpRequest.getsneaker('product/similar', {
            params: {
                id,
            },
        });
        return res.data;
    } catch (error) {
        console.log(error);
    }
};

export const feedback_product = async (id, star,page) => {
    //CÓ GÌ KHÓ HIỂU XEM LẠI FILE ULTILS/REQUEST
    //dùng axios hơn fetch thì đỡ khỏi nối chuỗi
    //await luôn đúng trước promise
    try {
        const res = await httpRequest.getsneaker('product/feedback', {
            params: {
                id,
                star,
                page
            },
        });
        return res.data;
    } catch (error) {
        console.log(error);
    }
};

export const count_feedback = async (id) => {
    //CÓ GÌ KHÓ HIỂU XEM LẠI FILE ULTILS/REQUEST
    //dùng axios hơn fetch thì đỡ khỏi nối chuỗi
    //await luôn đúng trước promise
    try {
        const res = await httpRequest.getsneaker('product/feedback/count', {
            params: {
                id,
            },
        });
        return res.data;
    } catch (error) {
        console.log(error);
    }
};
