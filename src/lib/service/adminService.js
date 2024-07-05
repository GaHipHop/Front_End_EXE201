import axios from "../axiosCustomize";
const getAllAdminByStatusTrue = async () => {
  return await axios.get(`Admin/getAllAdminByStatusTrue`);
};

const getAllAdminByStatusFalse = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  return await axios.get(`Admin/getAllAdminByStatusFalse`, config);
};

const getAdminById = async (id, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  return await axios.get(`Admin/getAdminById/${id}`, config);
};

const postcreateAdmin = async (data) => {
  return await axios.post(`Admin/createAdmin`, data);
};

const updateAdmin = async (id, data) => {
  return await axios.patch(`Admin/updateAdmin/${id}`, data);
};

const deletetAdmin = async (id, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  return await axios.delete(`Admin/deleteAdmin/${id}`, config);
};

export { deletetAdmin, getAdminById, getAllAdminByStatusFalse, getAllAdminByStatusTrue, postcreateAdmin, updateAdmin };

