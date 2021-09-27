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
    console.warn("Obsolete method! Please, use profileAPI object.");
    return profileAPI.getProfile(userId);
  }
};

export const profileAPI = {
  getProfile(userId) {
    return axiosInstance.get(`profile/${userId}`);
  },
  getStatus(userId) {
    return axiosInstance.get(`profile/status/${userId}`);
  },
  updateStatus(status) {
    return axiosInstance.put("/profile/status", {
      status: status
    });
  }
};

export const authAPI = {
  me() {
    return axiosInstance.get("auth/me");
  },
  login(email, password, rememberMe = false) {
    return axiosInstance.post("auth/login", { email, password, rememberMe });
  },
  logout() {
    return axiosInstance.delete("auth/login");
  }
}