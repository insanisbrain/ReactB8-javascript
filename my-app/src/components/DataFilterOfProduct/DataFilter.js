import React, { useEffect, useState } from 'react'
import axios from 'axios'

const DataFilter = () => {

  const [AllProductData, setAllProductData] = useState([]);
  const [productData, setProductData] = useState([]);
  const [categoryData, setCategoryData] = useState([]);

  useEffect(() => {
    getAllProduct();
    getAllCategory();
  }, [])

  const getAllProduct = () => {
    axios.get('http://localhost:8000/products')
      .then((response) => {
        setAllProductData(response.data);
        setProductData(response.data);
      })
      .catch((error) => {

      })
  }

  const getAllCategory = () => {
    axios.get('http://localhost:8000/category')
      .then((response) => {
        setCategoryData(response.data);
      })
      .catch((error) => {

      })
  }

  const changeCategory = (event) => {
    let filterdProductData = [...AllProductData].filter((product) => product.category_id === +event.target.value)
    setProductData(filterdProductData);
  }

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="dropdown">
              <select onChange={changeCategory} name="cars" id="cars">
                <option>All</option>
                {
                  categoryData.length && categoryData.map((category) => {
                    return <option value={category.id}>{category.name.toUpperCase()}</option>
                  })
                }
              </select>
            </div>
          </div>
        </div>
        <div className="row">
          {
            productData.length && productData.map((product) => {
              return (
                <div key={product.id} className="col-4 my-2">
                  <div className="card" style={{ width: '18rem' }}>
                    <div className="card-body">
                      <h5 className="card-title">{product.title}</h5>
                      <p className="card-text">Color : {product.color}</p>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>

      </div>

    </>
  )
}

export default DataFilter