import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import { AuthContext } from "../../../Context/Authprovider";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogOut = () => {
        logOut()
            .then(() => {
                swal("Log Out successful", "", "success");
                navigate("/logIn");
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <div>
            <div className="navbar bg-white shadow-md">
                <div className="flex-1 gap-6">
                    <a className="btn btn-ghost normal-case text-primary text-xl">
                        HelloApp
                    </a>
                    <a> Media</a>
                    <a>Message</a>
                </div>

                <div className="flex-none gap-2">
                    <div className="form-control">
                        <input
                            type="text"
                            placeholder="Search"
                            className="input h-8  md:flex sm:hidden input-bordered"
                        />
                    </div>
                    <div className="dropdown dropdown-end">
                        <label
                            tabIndex={0}
                            className="btn btn-ghost btn-circle avatar"
                        >
                            <div className="w-10 rounded-full">
                                {/* {
                  user.photoURL &&
                  <img src={user.photoURL} />
                } */}
                                <img src={user?.photoURL} />
                            </div>
                        </label>
                        <ul
                            tabIndex={0}
                            className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
                        >
                            <li>
                                <a className="justify-between">
                                    {user?.displayName}
                                </a>
                            </li>
                            <li onClick={handleLogOut}>
                                <a>Logout</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;

// import { React, useState } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faSearch } from '@fortawesome/free-solid-svg-icons';

// const Navbar = () => {
//   const [isSearchOpen, setIsSearchOpen] = useState(false);

//   const handleSearchToggle = () => {
//     setIsSearchOpen(!isSearchOpen);
//   };

//   return (
//     <nav className="bg-gray-300 p-4">
//       <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 flex items-center justify-between">
//         <div className="flex items-center">
//           <a href="/" className="text-white font-bold text-xl">
//             My Site
//           </a>

//           <div className="ml-4 flex items-center">
//             {isSearchOpen ? (
//               <div className="relative">
//                 <input
//                   type="text"
//                   className="w-64 px-3 py-2 rounded-md border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
//                   placeholder="Search"
//                 />
//                 <button
//                   className="absolute top-0 right-0 h-full w-12 text-center text-gray-600 hover:text-gray-800 focus:outline-none"
//                   onClick={handleSearchToggle}
//                 >
//                   Close
//                 </button>
//               </div>
//             ) : (
//               <button
//                 className="text-gray-400 hover:text-gray-600 focus:outline-none"
//                 onClick={handleSearchToggle}
//               >
//                 <FontAwesomeIcon icon={faSearch} />

//               </button>
//             )}
//           </div>
//         </div>
//         <div className="hidden md:block">
//           <div className="ml-4 flex items-center md:ml-6">
//             {/* Add additional links or icons here */}
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
