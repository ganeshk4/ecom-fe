import axios from 'axios';
const BASEURL = process.env.BACKEND_URL;

const axiosOptions = {
	BASEURL: process.env.BACKEND_URL,
	timeout: 30000,
	headers: {
		"Content-Type": "application/json",
	},
};

axios.defaults.withCredentials = true;
axios.defaults.headers.common['secret'] = process.env.API_SECRET;

const getRequest = (url: string) => {
	return axios.get(BASEURL + url, axiosOptions);
};

const postRequest = (url: string, body = {}) => {
	return axios.post(BASEURL + url, body, axiosOptions);
};

const putRequest = (url: string, body = {}) => {
	return axios.put(BASEURL + url, body, axiosOptions);
};

export { getRequest, postRequest, putRequest };
