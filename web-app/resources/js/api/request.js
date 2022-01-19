import '../bootstrap';

const service = window.axios.create({
    baseURL: process.env.MIX_APP_PATH,
    timeout: 10000, // Request timeout
});

export default service;
