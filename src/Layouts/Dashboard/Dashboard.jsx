import React from 'react';
import { FaBars, FaCalendar, FaHome, FaShoppingBag, FaShoppingCart, FaUsers, FaUtensils, FaWallet } from 'react-icons/fa';
import {  NavLink, Outlet } from 'react-router-dom';
import useAdmin from '../../Hooks/useAdmin';

const Dashboard = () => {
  // const isAdmin = true
  const [isAdmin] =useAdmin()
  const adminItem =(
    <>
         <li><NavLink to='/dashboard/home'><FaHome></FaHome>User Home</NavLink></li>
        <li><NavLink to='/dashboard/addItem'><FaUtensils></FaUtensils>Add an Item</NavLink></li>
        <li><NavLink to='/dashboard/manegeItem'><FaUtensils></FaUtensils>Manege Items</NavLink></li>
        <li><NavLink to='/dashboard/history'><FaWallet></FaWallet> Payment History</NavLink></li>
        <li><NavLink to='/dashboard/allUsers'><FaUsers></FaUsers>All Users</NavLink></li>
        </>
  )
    const userItem =(<>
         <li><NavLink to='/dashboard/home'><FaHome></FaHome>User Home</NavLink></li>
        <li><NavLink to='/dashboard/reservation'><FaCalendar></FaCalendar>Reservation</NavLink></li>
        <li><NavLink to='/dashboard/history'><FaWallet></FaWallet> Payment History</NavLink></li>
        <li><NavLink to='/dashboard/myCard'><FaShoppingCart></FaShoppingCart> My Cart</NavLink></li>
        </>
    )
    const navItems = (<>
    <li>
        <NavLink to="/"><FaHome></FaHome>Home</NavLink>
      </li>
      <li>
        <NavLink to="/menu"><FaBars></FaBars> Menu</NavLink>
      </li>
      <li>
        <NavLink to="/order/salad"><FaShoppingBag></FaShoppingBag> Order Food</NavLink>
      </li>
    </>)
    return (
        <div className="drawer lg:drawer-open">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content flex flex-col mb-6 mx-10 justify-center">
    {/* Page content here */}
    <Outlet></Outlet>
    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
  
  </div> 
  <div className="drawer-side bg-[#D1A054]">
    <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80 h-full">
      {/* Sidebar content here */}
     {isAdmin?.admin? adminItem:userItem}
     <div className="divider"></div>
     {navItems}
    </ul>
  
  </div>
</div>
    );
};

export default Dashboard;