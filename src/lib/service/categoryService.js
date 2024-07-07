import axios from "../axiosCustomize";
const getAllCategory = async () => {
  return await axios.get(`Category/GetAllCategory`);
};

const getAllCategoryFalse = async () => {
  return await axios.get(`Category/GetAllCategoryFalse`);
};

const GetCategoryById = async (id) => {
  return await axios.get(`Category/GetCategoryById/${id}`);
};

const postcreateCategory = async (data) => {
  return await axios.post(`Category/CreateCategory`, data);
};

const updateCategory = async (id, data) => {
  return await axios.patch(`Category/UpdateCategory/${id}`, data);
};

const deleteCategory = async (id) => {
  return await axios.delete(`Category/DeleteCategory/${id}`);
};

export {
  GetCategoryById,
  deleteCategory,
  getAllCategory,
  getAllCategoryFalse,
  postcreateCategory,
  updateCategory
};

