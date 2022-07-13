import Characters from "./characterRepository.js";

const repositories = {
    characters: Characters
};

export default {
  service: (name) => repositories[name],
};