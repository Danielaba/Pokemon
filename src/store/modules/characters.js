import axios from 'axios'
import Repository from '../../services/repositories/repositoryFactory';

const CharactersRepository = Repository.service('characters');

export default {
    namespaced: true,

    state: {
      characters: [],
      character: {},
      pagination: {},
    },
    
    getters: {
        characters: (state) => state.characters,
        character: (state) => state.character,
        pagination: (state) => state.pagination,
    },
  
    mutations: {
      setCharacters (state, characters) {
        state.characters = characters;
      },
      setCharacter (state, character) {
        state.character = character;
      },
      setPagination (state, pagination) {
        state.pagination = pagination;
      },
    },
  
    actions: {
      async getCharacters({ commit }, url) {
          const params = url? new URL(url): '';
          const query = params == '' ? '': params.search
          const response = await CharactersRepository.get(query);
          const { data } = response;
          commit("setPagination", data);
          const items = data.results.map(item => axios.get(item.url));
          const detail = await Promise.all(items); 
          const characters = detail.map(characeter => characeter.data)
          commit("setCharacters", characters);
      },

      async getCharacter({ commit }, id) {
        const response = await CharactersRepository.getById(id);
        const { data } = response;
        commit("setCharacter", data);
      },
    },
}
