import React from 'react'
import { useSelector } from 'react-redux';

const Header = () => {

  const numOfEyeProduct = useSelector(state => state.eyeProduct.numOfEyeProduct);
  const numOfGlassProducts = useSelector(state => state.glassProduct.numOfGlassProduct);

  return (
    <div>
      Your Total Product Count = {numOfEyeProduct + numOfGlassProducts}
    </div>
  )
}

export default Header