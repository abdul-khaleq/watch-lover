import React from 'react';
// import './Dashboard.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch,
    NavLink
} from "react-router-dom";
import useAuth from '../../hooks/useAuth';
import AddProduct from '../AddProduct/AddProduct';
import DashboardHeader from '../DashboardHeader/DashboardHeader';
import MyOrder from '../MyOrder/MyOrder';
const Dashboard = () => {
    const { admin, logOut, user } = useAuth();

    return (
        <div>
            {!admin && <MyOrder></MyOrder>}
            {admin && <AddProduct></AddProduct>}
            
        </div>
    );
};

export default Dashboard;