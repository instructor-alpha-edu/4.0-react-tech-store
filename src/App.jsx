import { useState } from "react";
import { Routes, Route } from "react-router";
import Header from "./components/Header";
import { products as initialProducts } from "./data/products";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import CartPage from "./pages/CartPage";
import SingleProductPage from "./pages/SingleProductPage";
import "./assets/css/style.css";

export default function App() {
  const [products, setProducts] = useState(
    initialProducts.map(product => ({ ...product, quantity: 0 }))
  );

  return (
    <div className="app">
      <Header products={products} />
      <div className="page">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products/:category" element={<ProductsPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/products/:category/:id" element={<SingleProductPage />} />
          <Route path="*" element={<div>Страница не найдена</div>} />
        </Routes>
      </div>
    </div>
  );
}
