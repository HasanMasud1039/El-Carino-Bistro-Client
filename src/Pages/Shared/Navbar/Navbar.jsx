import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import {FaShoppingCart} from 'react-icons/fa'
import useCart from "../../../Hooks/UseCart/UseCart";
import logo from '../../../assets/logo1.png'
import useAdmin from "../../../Hooks/useAdmin/useAdmin";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [cart] = useCart();
    const [isAdmin] = useAdmin();

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error));

    }

    const navOptions = <div className="  lg:flex  lg:text-white">
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/menu'>Our Menu</Link></li>
        <li><Link to='/order/salad'>Order Food</Link></li>
        {
            isAdmin ? <li><Link to="/dashboard/adminhome">Dashboard</Link> </li> :
            <li><Link to="/dashboard/userhome">Dashboard</Link> </li> 
        }
        {
            !isAdmin ?
            <li>
            <Link to='/dashboard/mycart'>
                <button className="btn gap-2 text-lg">
                    <FaShoppingCart className="w-10 h-6 text-yellow-400"></FaShoppingCart>
                    
                    <div className="badge badge-secondary p-4">+{cart?.length || 0}</div>
                </button>
            </Link>
        </li> : <></>
        }

        {
            user ? <>

                <li onClick={handleLogOut} className="ms-2 mt-4 btn btn-ghost">Log Out</li>
            </> : <>
                <li><Link to='/login'>Login</Link></li>
            </>
        }

    </div>
    return (
        <div className="navbar  fixed z-10 bg-opacity-30 bg-black max-w-screen-xl mx-auto text-white">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm text-black dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {navOptions}
                    </ul>
                </div>
                <img src={logo} className="ps-2 md:w-[40%] w-[30%]" alt="" />
                <a className="btn btn-ghost normal-case md:text-2xl h-20 text-xl text-orange-700  w-[80%] font-extrabold shadow-3xl font-serif">el Cariño Bistro</a>
                
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navOptions}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ? <>
                        <span className="mt-2 px-2 text-sm md:text-lg ">{user?.displayName}</span>
                        <span><img className="w-14 h-14 rounded-full" src={user?.photoURL} alt="" /></span>
                    </> : <></>
                }
                {/* <a className="btn">Button</a> */}
            </div>
        </div>
    );
};

export default Navbar;