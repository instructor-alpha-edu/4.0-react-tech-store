import { HiOutlineShoppingCart } from "react-icons/hi";
import { LuPlus } from "react-icons/lu";
import { LuMinus } from "react-icons/lu";
import { Link } from "react-router";

export default function ProductCard({
  currentProduct,
  activeCategory,
  increase,
  decrease,
  productsInCart,
}) {
  const { id, title, price } = currentProduct;
  const currentProductInCart = productsInCart.find(item => item.id === id);
  const quantity = currentProductInCart ? currentProductInCart.quantity : 0;

  return (
    <div className="card">
      <div className="card-img">
        <img src={currentProduct.images[0]} alt="Product Image Holder" />
      </div>
      <h4 className="card-title">{title}</h4>
      <div className="card-price">
        <span>{price}$</span>
      </div>
      {quantity === 0 ? (
        <button className="card-add-btn" onClick={() => increase(id, currentProduct)}>
          <HiOutlineShoppingCart />
          Добавить в корзину
        </button>
      ) : (
        <div className="card-btn">
          <button className="card-btn-manage" onClick={() => decrease(id)}>
            <LuMinus />
          </button>
          <div className="card-btn-count">{quantity}</div>
          <button className="card-btn-manage" onClick={() => increase(id, currentProduct)}>
            <LuPlus />
          </button>
        </div>
      )}
      <Link className="card-btn card-open-btn" to={`/products/${activeCategory}/${id}`}>
        Открыть
      </Link>
    </div>
  );
}
