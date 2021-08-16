import * as axios from "axios";

const axiosInstance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    "API-KEY": "7af8cf62-29c6-4ae5-8d77-ed8358a66d04"
  }
});

export const usersAPI = {
  getUsers (currentPage = 1, pageSize = 10) {
    return axiosInstance.get(`users?page=${currentPage}&count=${pageSize}`)
      .then(response => response.data);
  }
};

export const followAPI = {
  follow (id) {
    return axiosInstance.post(`follow/${id}`)
      .then(response => response.data);
  }
};