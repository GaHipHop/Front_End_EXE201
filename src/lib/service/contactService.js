import axios from "../axiosCustomize";
const getAllContacts = async () => {
  return await axios.get(`Contact/getAllContacts`);
};

const getContactBy = async (id) => {
  return await axios.get(`Contact/GetContactBy/${id}`);
};

const postcreateContact = async (data) => {
  return await axios.post(`Contact/CreateContact/`, data);
};

const updateContact = async (id, data) => {
  return await axios.patch(`Contact/UpdateContact/${id}`, data);
};

const deleteContact = async (id) => {
  return await axios.delete(`Contact/DeleteContact/${id}`);
};

export {
  deleteContact,
  getAllContacts,
  getContactBy,
  postcreateContact,
  updateContact,
};
