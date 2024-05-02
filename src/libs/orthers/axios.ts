import axios from 'axios';

const axiosRequest = axios.create({
    baseURL: `https://huonghai.vercel.app/`,
});

// const AxiosAuth = () => {
//     const { data: session } = useSession();

//     useEffect(() => {
//         const requestIntercept = axiosRequest.interceptors.request.use((config) => {
//             if (!config.headers['Authorization']) {
//                 config.headers['Authorization'] = `Bearer ${session?.user.accessToken}`;
//             }

//             return config;
//         });

//         return () => {
//             axiosRequest.interceptors.request.eject(requestIntercept);
//         };
//     }, [session]);

//     return axiosRequest;
// };

export const get = async (endpoint: string, body: any) => {
    const res = await axiosRequest.get(endpoint, body);
    return res;
};

export const post = async (endpoint: string, data: any) => {
    const res = await axiosRequest.post(endpoint, data);
    return res;
};

export const remove = async (endpoint: string) => {
    const res = await axiosRequest.delete(endpoint);
    return res;
};

export const put = async (endpoint: string, data: any) => {
    const res = await axiosRequest.put(endpoint, data);
    return res;
};
