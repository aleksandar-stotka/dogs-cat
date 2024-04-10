import { Link } from "react-router-dom";
import useLoguot from "../../hooks/useLoguot";
import { useAuthContext } from "../../hooks/useAuthContext";



function Navbar() {
  const { user } = useAuthContext();
  const { logout, isPending } = useLoguot();

  return (
    <nav className="flex   flex justify-center z-0">
      <aside className="text-black     lg:w-[40rem] fixed bottom-0 w-[50rem] text-white py-4   transition-all duration-300 z-30">
        <ul className="flex justify-center">
        {!user && (
          <>
            <li>
              <Link
                className="hover:bg-blue-300 text-white-700 font-bold py-2 px-4 rounded transition-colors"
                to="/login"
              >
              login
              </Link>
            </li>
            <li>
              <Link
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition-colors"
                to="/signup"
              >
                  Signup
              </Link>
            </li>
          </>
        )}
          
        </ul>
     

      </aside>
      <ul className="flex justify-between items-center  px-5">
    

        {user && (
          <li className="flex items-center space-x-3">
            {!isPending && (
              <button
                className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded transition-colors"
                onClick={logout}
              >
                Logout
              </button>
            )}
            {isPending && (
              <button className="bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded" disabled>
                Logging out...
              </button>
            )}
            
          </li>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
