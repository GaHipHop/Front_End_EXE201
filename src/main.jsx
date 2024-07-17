import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminCategory from "./components/admin/adminDashboard/AdminCategory";
import AdminDiscount from "./components/admin/adminDashboard/AdminDiscount";
import AdminManage from "./components/admin/adminDashboard/AdminManage";
import AdminProduct from "./components/admin/adminDashboard/AdminProduct";
import Contact from "./components/admin/adminDashboard/Contact";
import Dashboard from "./components/admin/adminDashboard/Dashboard";
import ProductList from "./components/admin/adminDashboard/ProductList";
import Transaction from "./components/admin/adminDashboard/Transaction";
import UpdateProduct from "./components/admin/adminDashboard/UpdateProduct";
import About from "./components/pages/About";
import Home from "./components/pages/Home";
// import AdminProduct from "./components/admin/adminDashboard/AdminProduct"
// import AdminCategory from "./components/admin/adminDashboard/AdminCategory"
import Login from "./components/pages/Login";
import Product from "./components/pages/Product";
import ProductDetail from "./components/pages/ProductDetail";
import "./index.css";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/admin/transaction" element={<Transaction />} />
        <Route path="/product" element={<Product />} />
        <Route path="/productDetail/:productId" element={<ProductDetail />} />
        
        <Route path="/admin/manageProducts" element={<ProductList />} />
        <Route path="/admin/createProducts" element={<AdminProduct />} />
        <Route path="/admin/updateProducts" element={<UpdateProduct />} />
        <Route path="/admin/category" element={<AdminCategory />} />
        <Route path="/admin/discount" element={<AdminDiscount />} />
        <Route path="/admin/manageAdmin" element={<AdminManage />} />
        <Route path="/admin/contact" element={<Contact />} />
        {/* <Route path="/admin/categories" element={<AdminCategory />} /> */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
