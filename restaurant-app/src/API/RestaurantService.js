import axios from 'axios';

class RestaurantService {

  static getRestaurants() {
    return axios.get(`http://localhost:8000/restaurant`)
      .catch((error) => { return Promise.reject(error) })
  }

}

export default RestaurantService;