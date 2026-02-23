import { products } from "../data/products";

const mockCartItems = products.slice(0, 3).map((item, i) => ({
  ...item,
  quantity: [1, 2, 1][i],
}));

export default function CartPage() {
  return (
    <div className="cart-page">
      <h2 className="cart-page__title">Корзина</h2>
      <div className="cart-item cart-header">
        <div></div>
        <div>Название товара</div>
        <div>Кол-во</div>
        <div>Общая сумма</div>
      </div>
      {mockCartItems.map(item => (
        <div className="cart-item" key={item.id}>
          <div>
            <img src={item.imageUrl} className="cart-item-img" alt={item.title} />
          </div>
          <div>{item.title}</div>
          <div className="cart-item-count">{item.quantity}</div>
          <div className="cart-item-price">{(item.price * item.quantity).toFixed(2)}$</div>
        </div>
      ))}
    </div>
  );
}
