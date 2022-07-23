import React from 'react'
import { NavLink } from 'react-router-dom'

const NavMenu = () => {
  return (
    <div>
      <nav>
        <div className="py-3">
          <NavLink className="mr-2" to="/">User List</NavLink>
          <NavLink className="mx-2" to="/createuser">Create User</NavLink>
        </div>
      </nav>
    </div>
  )
}

export default NavMenu