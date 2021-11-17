import userEvent from '@testing-library/user-event';
import React from 'react';
import { Nav } from 'react-bootstrap';
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
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../hooks/useAuth';
import DashboardHome from '../DashboardHome/DashboardHome';
import Payment from '../Payment/Payment';
const Dashboard = () => {
    let { path, url } = useRouteMatch();
    const { admin, logOut, user } = useAuth();

    return (
        <div>
            <div className="container-fluid fixed-top bg-dark py-3">
                <div className="row">
                    <div className="col-xl-2 col-sm-3 col-12 collapse show sidebar">
                        <div><h3 style={{ color: "white" }}>Dash Borad</h3></div>
                    </div>
                    <div className="col px-5 ms-5" style={{ textAlign: 'right' }}>
                        <div>
                            <button onClick={logOut} >Log Out</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid">
                <div className="row vh-100 flex-nowrap">
                    <div className="col-xl-2 col-sm-3 col-auto collapse show sidebar bg-dark text-white px-0">

                        <ul className="nav flex-column flex-nowrap text-truncate navbar-dark bg-dark mx-auto position-fixed pt-2 vh-100" id="sidebar" style={{ marginTop: 70 }}>
                            <NavLink to="/home">
                                <li className="nav-item">
                                    <a className="nav-link active" href="/home"><i className="fa fa-home"></i><span className="ml-1 d-none d-sm-inline">Home</span></a>
                                </li>
                            </NavLink>

                            {admin ? <NavLink to="/makeAdmin">
                                <li className="nav-item">
                                    <a className="nav-link" ><i className="fa fa-star"></i><span className="ml-1 d-none d-sm-inline">Make a Admin</span></a>
                                </li>
                            </NavLink> :
                                //  <NavLink to="/myOrder">
                                //     <li className="nav-item">
                                //         <a className="nav-link" ><i className="fa fa-star"></i><span className="ml-1 d-none d-sm-inline">My Order</span></a>
                                //     </li>
                                // </NavLink>
                                <Nav.Link as={HashLink} to="/myOrder">My Order</Nav.Link>
                                }



                            {admin ? <NavLink to="/addProduct">
                                <li className="nav-item">
                                    <a className="nav-link" ><i className="fa fa-heart"></i><span className="ml-1 d-none d-sm-inline">Add Products</span></a>
                                </li>
                            </NavLink>
                                : <NavLink to="/payment">
                                    <li className="nav-item">
                                        <a className="nav-link" ><i className="fa fa-heart"></i><span className="ml-1 d-none d-sm-inline">Payment</span></a>
                                    </li>
                                </NavLink>
                                
                                }
                            {admin ? <NavLink to="/manageProduct">
                                <li className="nav-item">
                                    <a className="nav-link" ><i className="fa fa-heart"></i><span className="ml-1 d-none d-sm-inline">Manage Products</span></a>
                                </li>
                            </NavLink>
                                : <NavLink to="/userReview">
                                    <li className="nav-item">
                                        <a className="nav-link" ><i className="fa fa-heart"></i><span className="ml-1 d-none d-sm-inline">Review</span></a>
                                    </li>
                                </NavLink>}

                        </ul>
                    </div>
                    <div className="col-xl-10 col-sm-9 col-12  py-3">
                    <Router>
                    <Switch>
        <Route exact path={path}>
          <h3>Please select a topic.</h3>
        </Route>
              <Route path={`${path}/payment`}>
              <Payment></Payment>
             </Route>
             </Switch>
                    </Router>
                    </div>
                </div>
            </div>




            
        </div>
    );
};

export default Dashboard;