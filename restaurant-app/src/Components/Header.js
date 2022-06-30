import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Header = () => {

  const [cartAmount, setCartAmount] = useState(0);

  useEffect(() => {
    axios.get(`http://localhost:8000/cart`)
      .then((response) => {
        setCartAmount(response.data.length);
      })
      .catch((error) => { console.log("response", error) })
  }, [])


  return (
    <div className="container">
      <div className="d-flex flex-row-reverse">
        <h2>Cart: {cartAmount}</h2>
      </div>
    </div>
  )
}

export default Header