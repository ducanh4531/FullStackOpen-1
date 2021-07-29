import axios from "axios";
const baseUrl = "http://localhost:3001/persons";

const getAll = () => {
  return axios.get(baseUrl).then((response) => response.data);
};

const create = (data) => {
  axios.post(`${baseUrl}`, data);
};

const remove = (id) => {
  axios.delete(`${baseUrl}/${id}`);
};

export { getAll, create, remove };
