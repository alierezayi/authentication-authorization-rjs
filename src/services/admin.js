import api from "../configs/api";

const addCategory = (data) => api.post("category", data);

const getCategory = () => api.get("category");

const deleteCategory = async (id) => {
  try {
    const response = await api.delete(`category/${id}`);
    return {
      response,
    };
  } catch (error) {
    return {
      error,
    };
  }
};

export { addCategory, getCategory, deleteCategory };
