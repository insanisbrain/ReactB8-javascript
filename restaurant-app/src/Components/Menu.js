import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Cart from './Utility/Cart';

const Menu = () => {

  const [menu, setMenu] = useState([]);
  const [allMenuData, setAllMenuData] = useState([])
  const [category, setCategory] = useState("pasta");

  useEffect(() => {
    axios.get(`http://localhost:8000/restaurant`)
      .then((response) => {
        setAllMenuData(response);
        filterCategory(response, category);
      })
      .catch((error) => console.log(error))
  }, [])

  const filterCategory = (menuData, category) => {
    let filterdCategoryMenuItems = menuData?.data?.menuItems?.filter((data) => data.category === category);
    setMenu(filterdCategoryMenuItems);
  }

  return (
    <div className="container">
      <div className="filter-buttons mt-2">
        <button type="button" onClick={() => filterCategory(allMenuData, "pizza")} className="btn btn-primary mx-2">Pizza</button>
        <button type="button" onClick={() => filterCategory(allMenuData, "burger")} className="btn btn-primary mx-2">Burger</button>
        <button type="button" onClick={() => filterCategory(allMenuData, "pasta")} className="btn btn-primary mx-2">Pasta</button>
        <button type="button" onClick={() => filterCategory(allMenuData, "pavbhaji")} className="btn btn-primary mx-2">Pavbhaji</button>
      </div>
      <div className="menu-items mt-5">
        <div className="row">
          {
            menu.length && menu[0].products.length && menu[0].products.map((menuItems) =>
              <div key={menuItems.id} className="col-md-4">
                <div className="card">
                  <img src={process.env.PUBLIC_URL + `${menuItems.image}`} className="img-rounded" alt="Cinque Terre" />
                  <div className="card-body">
                    <h5 className="card-title">{menuItems.title}</h5>
                    <p className="card-text">{menuItems.description}</p>
                  </div>
                  <Cart product={menuItems} />
                </div>
              </div>
            )
          }
        </div>
      </div>
    </div>
  )
}

export default Menu