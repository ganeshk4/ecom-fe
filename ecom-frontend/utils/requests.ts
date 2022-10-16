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

const getRequest = (url: string, params = {}) => {
	return axios.get(BASEURL + url, params);
};

const postRequest = (url: string, body = {}) => {
  console.log(process.env.BACKEND_URL);
  console.log(BASEURL + url);
	return axios.post(BASEURL + url, body, axiosOptions);
};

const putRequest = (url: string, body = {}) => {
	return axios.put(BASEURL + url, body, axiosOptions);
};

export { getRequest, postRequest, putRequest };
