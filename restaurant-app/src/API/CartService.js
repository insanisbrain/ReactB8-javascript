import axios from 'axios';

class CartService {

  static getCart() {
    return axios.get(`http://localhost:8000/cart`)
      .catch((error) => { return Promise.reject(error) })
  }

}

export default CartService;