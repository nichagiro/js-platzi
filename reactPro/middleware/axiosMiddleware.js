import axios from "axios";

const axiosMiddleware = () => {
    axios.interceptors.request.use(function (config) {
        return {
            ...config,
            headers: {
                ...config.headers,
                Cookies: document.cookie
            },
            // withCredentials: true,
        }
    }, function (error) {
        return Promise.reject(error);
    });

    axios.interceptors.response.use(function (response) {
        console.log("🚀 ~ file: .js:23 ~ response:", response)
        return response;
    }, function (error) {
        return Promise.reject(error);
    });
}

export default axiosMiddleware