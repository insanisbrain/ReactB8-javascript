import React from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'

const About = () => {

  const navigate = useNavigate()

  return (
    <div>
      About Page !!!
      {/* <button onClick={() => navigate('order-summary')}>Place Order</button> */}
      <div>
        <Link style={{ marginRight: '10px' }} to="/about/company">Company</Link>
        <Link to="/about/user">User</Link>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  )
}

export default About