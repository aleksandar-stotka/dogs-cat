import React from 'react';
import { Link } from 'react-router-dom';
import { links } from '../../utils/constans';
// Import the linksNav interface from types
import { linksNav } from '../../types/Types';
import useLoguot from '../../hooks/useLoguot';

function Navbar() {
    // Declare a variable of type linksNav
    const navbarLinks: linksNav = { links };
    const {logout} =useLoguot()

    return (
        <div>
           
            <div className='nav-links'>
                {navbarLinks.links.map(link => {
                    
                    return (
                        <li key={link.id}>
                            <Link to={link.url}>{link.text}</Link>
                        </li>
                    );
                })}
            </div>
       <button onClick={logout}>Logout</button>
        </div>
    );
}

export default Navbar;
