import React from 'react'
import { Link } from 'react-router-dom'
import { FaHome } from "react-icons/fa";
import { links } from '../../utils/constans';


function Navbar() {
  return (
    <div>
        <Link to="/">
        <FaHome />
        </Link>
    </div>
  )
}

export default Navbar