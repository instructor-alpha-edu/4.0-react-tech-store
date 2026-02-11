import { HiOutlineShoppingCart } from "react-icons/hi";
import { LuPlus } from "react-icons/lu";
import { LuMinus } from "react-icons/lu";

export default function ProductCard() {
  return (
    <div className="card">
      <div className="card-img">
        <img src="https://imgholder.ru/400x300/4f86f7/ffffff" alt="Product Image Holder" />
      </div>
      <h4 className="card-title">Название товара</h4>
      <div className="card-price">
        <span>15.99$</span>
      </div>
      <button className="card-add-btn">
        <HiOutlineShoppingCart />
        Добавить в корзину
      </button>
      {/* <div className="card-btn">
        <div className="card-btn-manage">
          <LuMinus />
        </div>
        <div className="card-btn-count">1</div>
        <div className="card-btn-manage">
          <LuPlus />
        </div>
      </div> */}
    </div>
  );
}
