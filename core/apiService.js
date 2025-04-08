import axios from "axios";

let token = "";

const generateHeader = (userHeader = {}) => {
  return {
    Authorization: token,
    ...userHeader,
  };
};

const generatePath = (path = "") => {
  return `http://137.184.197.76:1337${path}`;
};

export const get = (path, params, header = {}) => {
  return axios.get(generatePath(path), {
    headers: generateHeader(header),
    params: params,
  });
};

export const post = (path, data, header = {}) => {
  return axios.post(generatePath(path), data, {
    headers: generateHeader(header),
  });
};

export const put = (path, data, header = {}) => {
  return axios.put(generatePath(path), data, {
    headers: generateHeader(header),
  });
};

export const deleteRequest = (path, params, headers = {}) => {
  return axios.delete(generatePath(path), {
    headers: generateHeader(headers),
    params: params,
  });
};

export const setToken = (t) => {
  token = t || token;
};

const apiService = {
  get,
  post,
  put,
  deleteRequest,
  setToken,
};

export default apiService;
