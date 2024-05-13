import axios from "axios";
import api from "../configs/api";
import { getCookie } from "../utils/cookie";

const getProfile = () => api.get("user/whoami").then((res) => res || false);

const createPost = async (formData) => {
  const accessToken = getCookie("accessToken");
  try {
    const response = await axios.post(
      `${import.meta.env.VITE_BASE_URL}post/create`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    return {
      response,
    };
  } catch (error) {
    return {
      error,
    };
  }
};

const getPosts = () => api.get("post/my");

const getAllPosts = () => api.get("");

export { getProfile, createPost, getPosts, getAllPosts };
