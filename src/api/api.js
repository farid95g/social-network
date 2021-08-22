import * as axios from "axios";

const axiosInstance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    "API-KEY": "9cccbd4c-f715-472c-b861-204e6716d74a"
  }
});

export const usersAPI = {
  getUsers (currentPage = 1, pageSize = 10) {
    return axiosInstance.get(`users?page=${currentPage}&count=${pageSize}`)
      .then(response => response.data);
  },
  follow (userId) {
    return axiosInstance.post(`follow/${userId}`)
      .then(response => response.data);
  },
  unfollow(userId) {
    return axiosInstance.delete(`follow/${userId}`)
      .then(response => response.data);
  },
  getProfile(userId) {
    return axiosInstance.get(`profile/${userId}`);
  }
};

export const authAPI = {
  me() {
    return axiosInstance.get("auth/me");
  }
}