import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./components/admin/adminDashboard/Dashboard";
import Transaction from "./components/admin/adminDashboard/Transaction";
import About from "./components/pages/About";
import Home from "./components/pages/Home";
import AdminProduct from "./components/admin/adminDashboard/AdminProduct"
import AdminCategory from "./components/admin/adminDashboard/AdminCategory"
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
        <Route path="/productDetail" element={<ProductDetail />} />
        
        {/* <Route path="/admin/products" element={<AdminProduct />} /> */}
        {/* <Route path="/admin/categories" element={<AdminCategory />} /> */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
