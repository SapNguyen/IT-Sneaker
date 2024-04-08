import * as httpRequest from '~/ultils/httpRequest';

export const order = async (id, status) => {
    try {
        const res = await httpRequest.getsneaker('order/user', {
            params: {
                id,
                status,
            },
        });
        return res.data;
    } catch (error) {
        console.log(error);
    }
};
