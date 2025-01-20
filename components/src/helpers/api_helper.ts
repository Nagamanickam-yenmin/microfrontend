import axios from "axios";
import accessToken from "./accessToken";

// Access token key
export const tokenKey = "access_token";

// Pass new generated access token here
const token = accessToken;

// Apply base URL for axios
const API_URL = process.env.REACT_APP_BACKEND_URL;

// For using TS files custom navigation
var navigation: any;

export const axiosApi = axios.create({
  baseURL: API_URL,
});

// Custom navigation function
export const customNavigation = (nav: any) => {
  navigation = nav;
};

// Setting Authorization header if token exists
if (token) {
  axiosApi.defaults.headers.common["Authorization"] = token;
}

// Request interceptor
axiosApi.interceptors.request.use(
  (config) => {
    // You can add any logic before sending the request.
    // For example, check if the token is present in local storage and set it dynamically.
    const token = localStorage.getItem(tokenKey);
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    // Handle request error here
    return Promise.reject(error);
  }
);

// Response interceptor
axiosApi.interceptors.response.use(
  (response) => {
    // You can handle the response data here if needed.
    // For example, check if a specific condition exists in the response.
    return response;
  },
  (error) => {
    // Handle response error here.
    // For example, handle token expiration or log the error.
    if (error.response && error.response.status === 401) {
      // Token expired or unauthorized, you can handle it here (e.g., logout the user, refresh token, etc.)
      console.log("Unauthorized, please login again.");
    }
    return Promise.reject(error);
  }
);

export async function get(url: string, config = {}) {
  return await axiosApi
    .get(url, { ...config })
    .then((response) => response.data);
}

export async function post(url: string, data: any, config = {}) {
  return axiosApi
    .post(url, { ...data }, { ...config })
    .then((response) => response.data);
}

export async function put(url: string, data: any, config = {}) {
  return axiosApi
    .put(url, { ...data }, { ...config })
    .then((response) => response.data);
}

export async function del(url: string, config = {}) {
  return await axiosApi
    .delete(url, { ...config })
    .then((response) => response.data);
}

export function clearToken() {
  axiosApi.defaults.headers.common["Authorization"] = "";
}

export function setToken() {
  const accessToken = `Bearer ${localStorage.getItem(tokenKey)}`;
  axiosApi.defaults.headers.common["Authorization"] = accessToken;
}
