import { NavLink } from "react-router-dom";
import './Header.css'

const Header = () => {
    return (
        <div className="work-sans-font">
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow space-x-8">
                            <li><NavLink className={({ isActive }) =>
                                isActive ? 'border border-green-600 text-green-500 font-bold' : 'text-gray-700'
                            } to="/">Home</NavLink></li>
                            <li><NavLink className={({ isActive }) =>
                                isActive ? 'border border-green-600 text-green-500 font-bold' : 'text-gray-700'
                            } to="/listedbooks">Listed Books</NavLink></li>
                            <li><NavLink className={({ isActive }) =>
                                isActive ? 'border border-green-600 text-green-500 font-bold' : 'text-gray-700'
                            } to="/readingpagechart">Pages to Read</NavLink></li>
                            <li><NavLink className={({ isActive }) =>
                                isActive ? 'border border-green-600 text-green-500 font-bold' : 'text-gray-700'
                            } to="/bookclub">Book Club</NavLink></li>
                            <li><NavLink className={({ isActive }) =>
                                isActive ? 'border border-green-600 text-green-500 font-bold' : 'text-gray-700'
                            } to="/aboutus">About Us</NavLink></li>
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">Book Vibe</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 space-x-8">
                        <li><NavLink className={({ isActive }) =>
                            isActive ? 'border border-green-600 text-green-500 font-bold' : 'text-gray-700'
                        } to="/">Home</NavLink></li>
                        <li><NavLink className={({ isActive }) =>
                            isActive ? 'border border-green-600 text-green-500 font-bold' : 'text-gray-700'
                        } to="/listedbooks">Listed Books</NavLink></li>
                        <li><NavLink className={({ isActive }) =>
                            isActive ? 'border border-green-600 text-green-500 font-bold' : 'text-gray-700'
                        } to="/readingpagechart">Pages to Read</NavLink></li>
                        <li><NavLink className={({ isActive }) =>
                            isActive ? 'border border-green-600 text-green-500 font-bold' : 'text-gray-700'
                        } to="/bookclub">Book Club</NavLink></li>
                        <li><NavLink className={({ isActive }) =>
                            isActive ? 'border border-green-600 text-green-500 font-bold' : 'text-gray-700'
                        } to="/aboutus">About Us</NavLink></li>
                    </ul>
                </div>
                <div className="navbar-end space-x-2">
                    <a className="btn text-white bg-green-500">Sign In</a>
                    <a className="btn text-white bg-[#59C6D2]">Sign Up</a>
                </div>
            </div>
        </div>
    );
};

export default Header;