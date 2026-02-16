import { useState } from "react";
import Header from "./components/Header";
import Categories from "./components/Categories";
import Products from "./components/Products";
import { products as initialProducts } from "./data/products";
import { categories } from "./data/categories";
import "./assets/css/style.css";

export default function App() {
  const [products, setProducts] = useState(initialProducts.map(item => ({ ...item, quantity: 0 })));
  const [activeCategory, setActiveCategory] = useState(categories[0].eng);

  return (
    <div className="app">
      <Header products={products.filter(item => item.quantity > 0)} />
      <Categories
        categories={categories}
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />
      <Products products={products} setProducts={setProducts} activeCategory={activeCategory} />
    </div>
  );
}
