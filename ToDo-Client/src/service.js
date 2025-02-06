import axios from 'axios';

axios.defaults.baseURL = process.env.REACT_APP_API_URL;

axios.interceptors.response.use(
  response => response,
  error => {
    console.error('Axios error:', error.response ? error.response.data : error.message);
    return Promise.reject(error);
  }
);

export default {
  getTasks: async () => {
      const result = await axios.get(`/items`);
      return result.data;
  },

  addTask: async (name) => {
      const result = await axios.post(`/items`, { name, isComplete: false });
      return result.data;
  },

  setCompleted: async (id, isComplete) => {
      await axios.put(`/items/${id}`, { isComplete });
      return true;
  },

  deleteTask: async (id) => {
      await axios.delete(`/items/${id}`);
      return true;
  }
};
