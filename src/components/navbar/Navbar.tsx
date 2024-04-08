import { Link } from 'react-router-dom';
import { links } from '../../utils/constans';
// Import the linksNav interface from types
import useLoguot from '../../hooks/useLoguot';


function Navbar() {
    
    const {logout} =useLoguot()

    return (
        <div>
            
            
                <>
                 <Link to='/Signup'>
                 Signup
             </Link>
             <Link to='/login'>
                 Login
             </Link>
                </>

            
            <>
             <button onClick={logout}>Logout</button>
            </>
        
          
           
            <div className='nav-links'>
                {links.map(link => {
                    
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
