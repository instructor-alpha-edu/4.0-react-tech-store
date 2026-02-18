import { useState } from "react";
import { Link } from "react-router";
import { HiOutlineShoppingCart } from "react-icons/hi";
import logo from "../assets/img/react.svg";

export default function Header({ products }) {
  const [cartIsOpen, setCartIsOpen] = useState(false);

  function handleClickToggleCart() {
    setCartIsOpen(!cartIsOpen);
  }

  return (
    <header className="header">
      <Link to="/" className="logo">
        <img src={logo} alt="Logo" className="logo-img" />
        <div className="logo-body">
          <h1 className="logo-text">ReactTechShop</h1>
          <span className="logo-span">Учебный пример онлайн-магазина</span>
        </div>
      </Link>
      <div className="cart">
        <Link to="/cart" className="cart-btn">
          <div className="cart-btn-item">
            <HiOutlineShoppingCart />
          </div>
          <div className="cart-btn-item">|</div>
          <div className="cart-btn-item">{products.length}</div>
        </Link>
        {cartIsOpen ? (
          <div className="cart-list">
            <div className="cart-item cart-header">
              <div></div>
              <div>Название товара</div>
              <div>Кол-во</div>
              <div>Общая сумма</div>
            </div>
            {products.map(item => (
              <div className="cart-item">
                <div>
                  <img src={item.imageUrl} className="cart-item-img" />
                </div>
                <div>{item.title}</div>
                <div className="cart-item-count">{item.quantity}</div>
                <div className="cart-item-price">{item.price * item.quantity}$</div>
              </div>
            ))}
          </div>
        ) : null}
      </div>
    </header>
  );
}
