import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Home from './components/Home/Home/Home';
import Explores from './components/Explores/Explores';
import Navigation from './components/Shared/Navigation/Navigation';
import BuyNow from './components/BuyNow/BuyNow';
import Login from './components/Login/Login/Login';
import Register from './components/Login/Register/Register';
import AuthProvider from './components/contexts/AuthProvider/AuthProvider';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';
import AdminRoute from './components/Login/AdminRoute/AdminRoute';
import MakeAdmin from './components/Dashboard/MakeAdmin/MakeAdmin';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
import MyOrder from './components/Dashboard/MyOrder/MyOrder';
import Payment from './components/Dashboard/Payment/Payment';
import AddProduct from './components/Dashboard/AddProduct/AddProduct';
import ManageProducts from './components/Dashboard/ManageProducts/ManageProducts';
import UserReview from './components/Dashboard/UserReview/UserReview';
import Footer from './components/Shared/Footer/Footer';

function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Router>
        <Navigation></Navigation>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/login">
            <Login></Login>
          </Route>
          <Route exact path="/register">
            <Register></Register>
          </Route>
          <Route exact path="/explore">
            <Explores></Explores>
          </Route>
          <PrivateRoute exact path="/buynow/:productId">
            <BuyNow></BuyNow>
          </PrivateRoute>
          <PrivateRoute exact path="/myorder">
            <MyOrder></MyOrder>
          </PrivateRoute>
          <PrivateRoute exact path="/payment">
            <Payment></Payment>
          </PrivateRoute>
          <AdminRoute exact path="/addProduct">
            <AddProduct></AddProduct>
          </AdminRoute>
          <AdminRoute exact path="/manageProduct">
            <ManageProducts></ManageProducts>
          </AdminRoute>
          <PrivateRoute exact path="/dashboard">
            <Dashboard></Dashboard>
          </PrivateRoute>
          <PrivateRoute exact path="/userReview">
            <UserReview></UserReview>
          </PrivateRoute>
          <AdminRoute exact path="/makeAdmin">
            <MakeAdmin></MakeAdmin>
          </AdminRoute>
        </Switch>
        <Footer></Footer>
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
