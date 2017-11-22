import React from 'react'

const NavBar = (props) => {
  return (
    <div className='navbar'>
      <div className="ui secondary pointing menu large">
        <a className="item active">
          Home
        </a>
        <a className="item">
          Events
        </a>
        <a className="item">
          Weather
        </a>
      <div className="right menu">
        <a className="ui item">
          Logout
        </a>
      </div>
    </div>
  </div>
  )
}

export default NavBar
