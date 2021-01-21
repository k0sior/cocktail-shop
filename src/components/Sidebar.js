import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaBars } from "react-icons/fa"
import { links } from '../data'

const Sidebar = () => {

  const [toggleSidebar, setToggleSidebar] = useState(false)
  return (
    <div className="sidebar">
      <button className="nav-toggle">
        <FaBars onClick={() => console.log('setSidebar()')} />
      </button>
      <ul className="sidebar-links">
        <li>HEJ</li>
        {links.map((link, i) => {
          const { name, url } = link;
          <li key={"sidebar-link" + i}>
            <Link to={`${url}`}>
              {name}
            </Link>
          </li>
        })}
      </ul>
    </div>
  )
}

export default Sidebar
