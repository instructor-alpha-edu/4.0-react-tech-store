import { useState } from "react";
import { Routes, Route } from "react-router";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import CartPage from "./pages/CartPage";
import SingleProductPage from "./pages/SingleProductPage";
import "./assets/css/style.css";

export default function App() {
  const [cart, setCart] = useState([]);

  function increase(id, product) {
    let productExistsInCart = false;

    const updatedCart = cart.map(item => {
      if (item.id === id) {
        productExistsInCart = true;
        return { ...item, quantity: item.quantity + 1 };
      }

      return item;
    });

    if (!productExistsInCart) {
      setCart([
        ...cart,
        {
          id: product.id,
          title: product.title,
          imageUrl: product.images[0],
          price: product.price,
          quantity: 1,
        },
      ]);
    } else {
      setCart(updatedCart);
    }
  }

  function decrease(id) {
    let isProductShouldDeleted = false;

    const updatedCart = cart.map(item => {
      if (item.id === id) {
        if (item.quantity === 1) {
          isProductShouldDeleted = true;
        }

        return { ...item, quantity: item.quantity - 1 };
      }

      return item;
    });

    if (isProductShouldDeleted) {
      setCart(cart.filter(item => item.id !== id));
    } else {
      setCart(updatedCart);
    }
  }

  return (
    <div className="app">
      <Header products={cart} />
      <div className="page">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/products/:category"
            element={<ProductsPage increase={increase} decrease={decrease} productsInCart={cart} />}
          />
          <Route path="/cart" element={<CartPage productsInCart={cart} />} />
          <Route
            path="/products/:category/:id"
            element={
              <SingleProductPage increase={increase} decrease={decrease} productsInCart={cart} />
            }
          />
          <Route path="*" element={<div>Страница не найдена</div>} />
        </Routes>
      </div>
    </div>
  );
}
