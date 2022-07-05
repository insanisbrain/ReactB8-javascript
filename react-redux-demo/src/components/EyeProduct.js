import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { addEyeProduct, buyEyeProduct } from '../redux/eyewearproduct/EyeProductAction';

const EyeProduct = () => {

  const numOfProduct = useSelector(state => state.eyeProduct.numOfEyeProduct)
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Total EYE Products -{numOfProduct} </h2>
      {/* <button onClick={() => { dispatch(buyEyeProduct()) }}>Buy EYE Product</button> */}
      <button onClick={() => { dispatch(addEyeProduct()) }}>Add EYE Product</button>
    </div >
  )
}

export default EyeProduct