import { NavLink, Outlet } from "react-router-dom";
import { FaBook, FaCalendarAlt, FaComment, FaEnvelope, FaHome, FaShoppingBag, FaShoppingCart, FaWallet, FaHamburger, FaUtensils, FaUsers, FaArrowAltCircleLeft,  } from 'react-icons/fa'
import useCart from "../Hooks/UseCart/UseCart";
import useAdmin from "../Hooks/useAdmin/useAdmin";
import logo from '../assets/logo1.png'

const Dashboard = () => {
    const [cart] = useCart();

    //TODO:: load data from server  to have dynamic isAdmin based on Data
    // const isAdmin = true;
    const [isAdmin] = useAdmin();


    return (
        <div className="drawer drawer-mobile w-full ">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                <label htmlFor="my-drawer-2" className="btn  bg-orange-600 drawer-button lg:hidden">Dashboard</label>
                <Outlet></Outlet>
            </div>
            <div className="drawer-side  w-[62%] md:w-[90%]">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>

                <ul className="menu md:p-4 p-2 md:w-80 w-60 h-full bg-gradient-to-r to-[#e39c33]  from-orange-400">
                    <div className="uppercase text-sm md:text-lg font-serif space-y-2 md:font-bold font-semibold  w-[90%] mb-6">

                    <label htmlFor="my-drawer-2" className=" absolute right-2 top-0 bg-transparent text-3xl text-red-800 p-1  drawer-button lg:hidden"><FaArrowAltCircleLeft></FaArrowAltCircleLeft> </label>
                        <div className="flex justify-between md:w-full w-[70%]">
                            <img className="md:w-20 w-10" src={logo} alt="" />
                            <p className="md:text-2xl  font-serif">el Cariño Bistro</p>
                        </div>
                        <hr /><hr />
                        {/* <p className=" ">restaurant</p> */}
                        {
                            isAdmin ? <div className="">
                                <li><NavLink to='/dashboard/adminhome'><FaHome></FaHome> Admin Home</NavLink></li>
                                <li><NavLink to='/dashboard/additem'><FaUtensils></FaUtensils> Add Items
                                </NavLink></li>
                                <li><NavLink to='/dashboard/manageItems'><FaWallet></FaWallet>Manage items</NavLink></li>
                                <li><NavLink to='/dashboard/reservation'><FaCalendarAlt></FaCalendarAlt> manage bookings</NavLink></li>
                                <li><NavLink to='/dashboard/allusers'><FaUsers></FaUsers> all users</NavLink></li>


                            </div> : <div className="">

                                <li><NavLink to='/dashboard/userhome'><FaHome></FaHome> User Home</NavLink></li>
                                <li><NavLink to='/dashboard/mycart'><FaShoppingCart></FaShoppingCart>My Cart
                                    <span className="badge badge-secondary p-4">+{cart?.length || 0}</span>
                                </NavLink></li>
                                <li><NavLink to='/dashboard/history'><FaWallet></FaWallet> Payment History</NavLink></li>
                                <li><NavLink to='/dashboard/reservation'><FaCalendarAlt></FaCalendarAlt> Reservation</NavLink></li>
                                <li><NavLink to='/dashboard/addReview'><FaComment></FaComment> Add review</NavLink></li>
                                <li><NavLink to='/dashboard/booking'><FaBook></FaBook> My Booking</NavLink></li>

                            </div>
                        }

                        <div className="divider"></div>
                        <li><NavLink to='/'><FaHome></FaHome> Home</NavLink></li>
                        <li><NavLink to='/menu'><FaHamburger></FaHamburger> Menu</NavLink></li>
                        <li><NavLink to='/order/salad'><FaShoppingBag></FaShoppingBag> Order Food</NavLink></li>
                        <li><NavLink to='/contact'><FaEnvelope></FaEnvelope> Contact</NavLink></li>
                    </div>
                    {/* Sidebar content here */}


                </ul>

            </div>
        </div>
    );
};

export default Dashboard;