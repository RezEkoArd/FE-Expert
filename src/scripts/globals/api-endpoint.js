import CONFIG from './config';

const API_ENDPOINT = {
  GET_LIST: `${CONFIG.BASE_URL}/list`,
  SEARCH: `${CONFIG.BASE_URL}/search?q=<query>`,
  DETAIL: (id) => `${CONFIG.BASE_URL}/detail/${id}`,
  PIC_SM: (id) => `https://restaurant-api.dicoding.dev/images/small/${id}`,
  PIC_MD: (id) => `https://restaurant-api.dicoding.dev/images/medium/${id}`,
  PIC_LG: (id) => `https://restaurant-api.dicoding.dev/images/large/${id}`,
};

export default API_ENDPOINT;
