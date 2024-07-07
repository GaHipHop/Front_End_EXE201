import axios from "../axiosCustomize";
const getAllKind = async () => {
  return await axios.get(`Kind/GetAllKind`);
};

const getAllKindFalse = async () => {
  return await axios.get(`Kind/GetAllKindFalse`);
};

const GetAllKindByProductId = async (id) => {
  return await axios.get(`Kind/GetAllKindByProductId/${id}`);
};

const GetKindById = async (id) => {
  return await axios.get(`Kind/GetKindById/${id}`);
};

const postcreateKind = async (data) => {
  return await axios.post(`Kind/CreateKind`, data);
};

const updateKind = async (id, data) => {
  return await axios.patch(`Kind/UpdateKind/${id}`, data);
};

const deleteKind = async (id) => {
  return await axios.delete(`Kind/DeleteKind/${id}`);
};

export {
  getAllKind,
  getAllKindFalse,
  GetAllKindByProductId,
  GetKindById,
  postcreateKind,
  updateKind,
  deleteKind,
};
