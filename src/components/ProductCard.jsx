import { HiOutlineShoppingCart } from "react-icons/hi";
import { LuPlus } from "react-icons/lu";
import { LuMinus } from "react-icons/lu";

export default function ProductCard({ currentProduct, products, setProducts }) {
  const { id, title, price, imageUrl, quantity } = currentProduct;

  function increase() {
    const updatedProducts = products.map(item => {
      if (item.id === id) {
        return { ...item, quantity: item.quantity + 1 };
      }

      return item;
    });

    setProducts(updatedProducts);
  }

  function decrease() {
    const updatedProducts = products.map(item => {
      if (item.id === id) {
        return { ...item, quantity: item.quantity - 1 };
      }

      return item;
    });

    setProducts(updatedProducts);
  }

  return (
    <div className="card">
      <div className="card-img">
        <img src={imageUrl} alt="Product Image Holder" />
      </div>
      <h4 className="card-title">{title}</h4>
      <div className="card-price">
        <span>{price}$</span>
      </div>
      {quantity === 0 ? (
        <button className="card-add-btn" onClick={increase}>
          <HiOutlineShoppingCart />
          Добавить в корзину
        </button>
      ) : (
        <div className="card-btn">
          <button className="card-btn-manage" onClick={decrease}>
            <LuMinus />
          </button>
          <div className="card-btn-count">{quantity}</div>
          <button className="card-btn-manage" onClick={increase}>
            <LuPlus />
          </button>
        </div>
      )}
    </div>
  );
}
