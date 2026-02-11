import { HiOutlineShoppingCart } from "react-icons/hi";
import logo from "../assets/img/react.svg";

export default function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="Logo" className="logo-img" />
        <div className="logo-body">
          <h1 className="logo-text">ReactTechShop</h1>
          <span className="logo-span">Учебный пример онлайн-магазина</span>
        </div>
      </div>
      <div className="cart">
        <div className="cart-btn">
          <div className="cart-btn-item">
            <HiOutlineShoppingCart />
          </div>
          <div className="cart-btn-item">|</div>
          <div className="cart-btn-item">0</div>
        </div>
        <div className="cart-list">
          <div className="cart-item cart-header">
            <div></div>
            <div>Название товара</div>
            <div>Кол-во</div>
            <div>Общая сумма</div>
          </div>
          <div className="cart-item">
            <div>
              <img src="https://imgholder.ru/400x300/4f86f7/ffffff" className="cart-item-img" />
            </div>
            <div>Название товара</div>
            <div className="cart-item-count">4</div>
            <div className="cart-item-price">27.99$</div>
          </div>
          <div className="cart-item">
            <div>
              <img src="https://imgholder.ru/400x300/4f86f7/ffffff" className="cart-item-img" />
            </div>
            <div>Название товара</div>
            <div className="cart-item-count">4</div>
            <div className="cart-item-price">27.99$</div>
          </div>
          <div className="cart-item">
            <div>
              <img src="https://imgholder.ru/400x300/4f86f7/ffffff" className="cart-item-img" />
            </div>
            <div>Название товара</div>
            <div className="cart-item-count">4</div>
            <div className="cart-item-price">27.99$</div>
          </div>
        </div>
      </div>
    </header>
  );
}
