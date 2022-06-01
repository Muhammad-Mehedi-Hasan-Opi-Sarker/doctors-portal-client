import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div class="drawer drawer-mobile">
            <input id="dashboard-slider" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content">
                <h1 className='text-3xl text-secondary font-bold'>DashBoard</h1>
                <Outlet></Outlet>
                {/* <label for="dashboard-slider" class="btn btn-primary drawer-button lg:hidden">Open drawer</label> */}

            </div>
            <div class="drawer-side">
                <label for="dashboard-slider" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content">
                    <li><Link to='/dashboard'>My Appointments</Link></li>
                    <li><Link to='/dashboard'>My Reviews</Link></li>
                    <li><Link to='/dashboard/review'>My History</Link></li>
                    <li><Link to='/dashboard/users'>All Users</Link></li>
                </ul>

            </div>

        </div>
    );
};

export default Dashboard;