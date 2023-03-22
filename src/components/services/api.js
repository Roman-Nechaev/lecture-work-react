import axios from 'axios';

axios.defaults.baseURL = 'https://641ac33fc152063412e068f1.mockapi.io';

export const addMaterial = async values => {
  const response = await axios.post('/meterial', values);
  return response.data;
};

export const getMaterials = async () => {
  const response = await axios.get('/meterial');
  return response.data;
};

export const deleteMaterials = async id => {
  const response = await axios.delete(`/meterial/${id}`);
  return response.data;
};

export const updateMaterials = async fields => {
  const response = await axios.put(`/meterial/${fields.id}`, fields);
  return response.data;
};
