import axios from 'axios';

const API_KEY = '52958686-1557e7ea2156d90b306934aa7';

axios.defaults.baseURL = 'https://pixabay.com/api/';
axios.defaults.params = {
  key: API_KEY,
  image_type: 'photo',
  orientation: 'horizontal',
  safesearch: true,
};

export const getImagesByQuery = query => {
  return axios
    .get('', {
      params: {
        q: query,
      },
    })
    .then(response => response.data)
    .catch(error => console.log(error));
};
