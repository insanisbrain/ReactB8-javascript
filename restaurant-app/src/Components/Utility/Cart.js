import axios from 'axios'
import React, { useEffect, useReducer } from 'react'

const Cart = (props) => {

  const addToCart = () => {

    let payload = {
      title: props.product.title,
      description: props.product.description,
      image: props.product.image
    }

    axios.post(`http://localhost:8000/cart`, payload)
      .then((response) => {
        console.log("RESPONSE", response);
      }).catch((error) => {
        console.log("ERROR", error)
      })
  }

  return (
    <>
      <div className="add-to-cart mb-3">
        <button onClick={() => addToCart()} className="btn btn-primary">Add to Cart</button>
      </div>
    </>
  )
}

export default Cart