import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import Home from './pages/home/Home';
import Order from './pages/order/Order';
import Cart from './pages/cart/Cart';
import Dashboard from './pages/admin/dashboard/Dashboard';
import NoPage from './pages/nopage/NoPage';
import MyState from './context/data/myState';
import Login from './pages/registration/Login';
import Signup from './pages/registration/Signup';
import ProductInfo from './pages/productInfo/ProductInfo';
import AddProduct from './pages/admin/page/AddProduct';
import UpdateProduct from './pages/admin/page/UpdateProduct';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Allproducts from './pages/allproducts/Allproducts';
function App() {
  return (
    <MyState> 
      <Router>
        <Routes>// Define application routes
          <Route path="/" element={<Home />} />
          <Route path="/allproducts" element={<Allproducts />} />
          <Route path="/order" element={
            <ProtectedRoute>
              <Order />
            </ProtectedRoute>  // Protect the Order route for authenticated users
          } />
          <Route path="/cart" element={<Cart />} />
          <Route path="/dashboard" element={
            <ProtectedRouteForAdmin>
              <Dashboard />
            </ProtectedRouteForAdmin> // Protect the Dashboard route for admin users
          } />
          <Route path='/login' element={<Login/>} />
          <Route path='/signup' element={<Signup/>} />
          <Route path='/productinfo/:id' element={<ProductInfo/>} />
          <Route path='/addproduct' element={
            <ProtectedRouteForAdmin>
              <AddProduct/>
            </ProtectedRouteForAdmin>  // Protect the AddProduct route for admin users
          } />
          <Route path='/updateproduct' element={
            <ProtectedRouteForAdmin>
              <UpdateProduct/>
            </ProtectedRouteForAdmin> // Protect the UpdateProduct route for admin users
          } />
          <Route path="/*" element={<NoPage />} />
        </Routes>
        <ToastContainer/> // Render the toast container for displaying notifications
      </Router>
    </MyState>

  )
}

export default App 

// User Protected Route
export const ProtectedRoute = ({children}) => {
  const user = localStorage.getItem('user')  // Check if a user is authenticated
  if(user){
    return children // Allow access to the protected route if a user is authenticated
  }else{
    return <Navigate to={'/login'}/> // Redirect to the login page if not authenticated
  }
}

// Admin Protected Route
const ProtectedRouteForAdmin = ({children})=> {
  const admin = JSON.parse(localStorage.getItem('user'))  // Check if the user is an admin
  
  if(admin.user.email === 'wealthmarketting@gmail.com'){
    return children  // Allow access to the protected route for admin users
  }
  else{
    return <Navigate to={'/login'}/>  // Redirect to the login page if not an admin
  }

}