import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Dashboard from "./components/admin/adminDashboard/Dashboard";
import Product from "./components/pages/Product";
import ProductDetail from "./components/pages/ProductDetail";
import Transaction from "./components/admin/adminDashboard/Transaction";
import AdminProduct from "./components/admin/adminDashboard/AdminProduct"
import AdminCategory from "./components/admin/adminDashboard/AdminCategory"
import Login from "./components/pages/Login";

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
        
        <Route path="/admin/products" element={<AdminProduct />} />
        <Route path="/admin/categories" element={<AdminCategory />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
