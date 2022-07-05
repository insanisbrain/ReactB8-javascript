import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { addGlassProduct, buyGlassProduct } from './../redux/glassproduct/GlassProductAction'

const GlassProduct = () => {

  const numOfProducts = useSelector(state => state.glassProduct.numOfGlassProduct);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Total Glass Products - {numOfProducts} </h2>
      <button onClick={() => dispatch(buyGlassProduct())}>Buy Glass Product</button>
      <button onClick={() => dispatch(addGlassProduct())}>Add Glass Product</button>
    </div>
  )
}

export default GlassProduct