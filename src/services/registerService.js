import * as httpRequest from '~/ultils/httpRequest';

export const register = async (name,username,password) => {
    try {
        const res = await httpRequest.postsneaker('register',{
            params:{
                name,username,password
            },
        });
        return res.data;
    } catch (error) {
        console.log(error);
    }
};


