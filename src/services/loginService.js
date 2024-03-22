import * as httpRequest from '~/ultils/httpRequest';

export const login = async (username,password) => {
    try {
        const res = await httpRequest.getsneaker('login',{
            params:{
                username,password
            },
        });
        return res.data;
    } catch (error) {
        console.log(error);
    }
};


