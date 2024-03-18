import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';
import { links } from '../../utils/constans';
// Import the linksNav interface from types
import { linksNav } from '../../types/Types';

function Navbar() {
    // Declare a variable of type linksNav
    const navbarLinks: linksNav = { links };

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
        </div>
    );
}

export default Navbar;
