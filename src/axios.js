const axios = require('axios');
getUser()
async function getUser() {
  try {
    // const response = await axios.post('https://api.outsidein.dev/1Rb1oOqz6WWcXbtyMMeEqOG2FeUcsBIS/restaurants',
    //     { "id": 2,
    //     "name": "Salad Place",
    //   "created_at": "2020-03-30T23:54:52.000Z" }
    // );
    const response = await axios.get('https://api.outsidein.dev/1Rb1oOqz6WWcXbtyMMeEqOG2FeUcsBIS/restaurants'    );
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
}
