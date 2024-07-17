import axios from "../axiosCustomize";
const getAllProduct = async () => {
  return await axios.get(`Product/GetAllProduct`);
};

const getAllAdminByStatusFalse = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  return await axios.get(`Product/GetAllProductFalse`, config);
};

const getAllProductByCategoryId = async (id) => {
  return await axios.get(`Product/GetAllProductByCategoryId/${id}`);
};

const GetProductById = async (id) => {
  return await axios.get(`Product/GetProductById/${id}`);
};

const postcreateProduct = async (data) => {
  return await axios.post(`Product/CreateProduct`, data);
};

const updateProduct = async (id, data) => {
  return await axios.patch(`Product/UpdateProduct/${id}`, data);
};

const deletetProduct = async (id) => {
  return await axios.delete(`Product/DeleteProduct/${id}`);
};

export {
  GetProductById, deletetProduct, getAllAdminByStatusFalse, getAllProduct, getAllProductByCategoryId, postcreateProduct,
  updateProduct
};

