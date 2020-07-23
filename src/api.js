import axios from 'axios'

const client = axios.create({
  baseURL: 'https://api.outsidein.dev/1Rb1oOqz6WWcXbtyMMeEqOG2FeUcsBIS',
});

const api = {
  loadRestaurants() {
    return client.get('/restaurants').then(response => response.data)
  },
};

export default api;
