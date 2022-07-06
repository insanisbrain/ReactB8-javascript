import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { ADD_CLOTH_PRODUCT, BUY_CLOTH_PRODUCT, RESET_CLOTH_PRODUCT } from '../redux/clothproduct/ClothProductSlice';

const ClothProduct = () => {

  const numOfProducts = useSelector(state => state.clothProduct.numOfClothProducts);
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <h2>Total Cloth Products - {numOfProducts}</h2>
        <button onClick={() => { dispatch(BUY_CLOTH_PRODUCT()) }}>Buy Cloth Product</button>
        <button onClick={() => { dispatch(ADD_CLOTH_PRODUCT()) }}>Add Cloth Product</button>
        <button onClick={() => { dispatch(RESET_CLOTH_PRODUCT()) }}>Reset Cloth Product</button>
      </div>
    </div>
  )
}

export default ClothProduct