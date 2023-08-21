import React from 'react';
import { FaBars, FaCalendar, FaHome, FaShoppingBag, FaShoppingCart, FaUsers, FaWallet } from 'react-icons/fa';
import {  NavLink, Outlet } from 'react-router-dom';

const Dashboard = () => {
  const isAdmin = true
  const adminItem =(
    <>
         <li><NavLink to='/dashboard/home'><FaHome></FaHome>User Home</NavLink></li>
        <li><NavLink to='/dashboard/reservation'><FaCalendar></FaCalendar>Reservation</NavLink></li>
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
  <div className="drawer-content flex flex-col my-16 mx-16 justify-center">
    {/* Page content here */}
    <Outlet></Outlet>
    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
  
  </div> 
  <div className="drawer-side bg-[#D1A054]">
    <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80 h-full">
      {/* Sidebar content here */}
     {isAdmin? adminItem:userItem}
     <div className="divider"></div>
     {navItems}
    </ul>
  
  </div>
</div>
    );
};

export default Dashboard;