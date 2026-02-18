import { useState, useEffect } from "react";
import axios from "axios";
import Header from "./components/Header";
import Categories from "./components/Categories";
import Products from "./components/Products";
import { categories } from "./data/categories";
import "./assets/css/style.css";

export default function App() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [activeCategory, setActiveCategory] = useState(categories[0].eng);

  useEffect(() => {
    async function fetchProductsByCategory(category) {
      try {
        setIsLoading(true);
        const res = await axios.get("https://dummyjson.com/products/category/" + category);
        setProducts(res.data.products.map(item => ({ ...item, quantity: 0 })));
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setError("Произошла ошибка при получении данных!");
      }
    }
    fetchProductsByCategory(activeCategory);
  }, [activeCategory]);

  if (isLoading) {
    return (
      <div className="app">
        <div className="loader-container">
          <span class="loader"></span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="app">
        <p className="error">{error}</p>
      </div>
    );
  }

  return (
    <div className="app">
      <Header products={products.filter(item => item.quantity > 0)} />
      <Categories
        categories={categories}
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />
      {/* <Products products={products} setProducts={setProducts} activeCategory={activeCategory} /> */}
      <Products products={products} />
    </div>
  );
}
