import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { ADD_GLASS_PRODUCT, BUY_GLASS_PRODUCT } from '../redux/glassproduct/GlassProductSlice';

const GlassProduct = () => {

  const numOfProducts = useSelector(state => state.glassProduct.numOfGlassProduct);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Total Glass Products - {numOfProducts} </h2>
      <button onClick={() => dispatch(BUY_GLASS_PRODUCT())}>Buy Glass Product</button>
      <button onClick={() => dispatch(ADD_GLASS_PRODUCT())}>Add Glass Product</button>
    </div>
  )
}

export default GlassProduct