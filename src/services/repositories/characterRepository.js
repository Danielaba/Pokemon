import api from '../clients/axios';

const resource = 'pokemon/';
export default {
    async get(params) {
      const response = await api.get(`${resource}${params}`);
      return response; 
    },

    async getById(id) {
        const response = await api.get(`${resource}${id}`);
        return response; 
     },
};