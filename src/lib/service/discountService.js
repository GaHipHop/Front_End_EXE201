import axios from "../axiosCustomize";
const getAllDiscount = async () => {
  return await axios.get(`Discount/GetAllDiscount`);
};

const GetDiscountBy = async (id) => {
  return await axios.get(`Discount/GetDiscountBy/${id}`);
};

const postcreateDiscount = async (data) => {
  return await axios.post(`Discount/CreateDiscount`, data);
};

const updateDiscount = async (id, data) => {
  return await axios.patch(`Discount/UpdateDiscount/${id}`, data);
};

const deletetDiscount = async (id) => {
  return await axios.delete(`Discount/DeleteDiscount/${id}`);
};

export {
  getAllDiscount,
  GetDiscountBy,
  postcreateDiscount,
  updateDiscount,
  deletetDiscount,
};
