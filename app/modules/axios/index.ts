import Axios from "axios";

const post = async (url: string, data?: object, headers?: object, timeoutMS?: number): Promise<any> => {
    try {
        const config: any = {
            method: 'POST',
            headers: {
                'Cache-Control': 'no-cache',
                'Content-Type': 'application/json',
            },
            url,
            timeout: timeoutMS || 60000
        };
        headers && (config.headers = { ...config.headers, ...headers });
        data && (config.data = JSON.stringify(data));
        const response = await Axios(config);
        return response.data;
    } catch (error) {
        console.warn('Axios -> post: ', error);
        return error;
    }
};

const get = async (url: string, params?: object, headers?: object, timeoutMS?: number): Promise<any> => {
    try {
        const config: any = {
            method: 'GET',
            headers: {
                'Cache-Control': 'no-cache',
                'Content-Type': 'application/json',
            },
            url,
            timeout: timeoutMS || 60000
        };
        headers && (config.headers = headers);
        params && (config.params = params);
        const response = await Axios(config);
        return response.data;
    } catch (error) {
        console.warn('Axios -> get: ', error);
        return error;
    }
};

export const IAxios = {
    post,
    get,
};
