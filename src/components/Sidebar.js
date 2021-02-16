import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaBars } from "react-icons/fa"
import { links, logo } from '../data'
import { useGlobalContext } from '../context'

const Sidebar = () => {

  const [toggleSidebar, setToggleSidebar] = useState(false)
  
  const closeSidebar = () => {
    setToggleSidebar(false)
  }


  return (
    <div className="sidebar">
      <div className="sidebar-logo">
        <img src={logo.url} alt={logo.name}/>
      </div>
      <button className="nav-toggle">
        <FaBars onClick={() => setToggleSidebar(!toggleSidebar)} />
      </button>
      <aside className={`${toggleSidebar ? 'sidebar-toggle' : 'sidebar-closed'}`}>
        <ul className="sidebar-links">
          {links.map((link, i) => {
            const { name, url } = link;
            return (
              <Link
                to={url}
                key={"sidebar-link" + i}
                className='sidebar-link'
                onClick={() => closeSidebar()}
              >
                <li>
                  {name}
                </li>
              </Link>
            )
          })}
          <Link
            to='/cart'
            className='sidebar-link'
            onClick={() => closeSidebar()}
          >
            <li >
              Koszyk
          </li>
          </Link>
          <Link
            to='/fav'
            className='sidebar-link'
            onClick={() => closeSidebar()}
          >
            <li >
              Ulubione
          </li>
          </Link>
        </ul>
      </aside>
    </div>
  )
}

export default Sidebar
