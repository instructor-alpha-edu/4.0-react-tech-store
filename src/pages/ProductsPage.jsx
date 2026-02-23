import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { axiosInstance } from "../services/axios";
import ProductCard from "../components/ProductCard";
import Breadcrumbs from "../components/Breadcrumbs";
import { categories } from "../data/categories";

export default function ProductsPage({ increase, decrease, productsInCart }) {
  const { category } = useParams();

  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchProductsByCategory() {
      try {
        setIsLoading(true);
        const res = await axiosInstance.get("/products/category/" + category);
        setProducts(res.data.products);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setError("Произошла ошибка при получении данных!");
      }
    }
    fetchProductsByCategory();
  }, [category]);

  if (isLoading) {
    return (
      <div className="loader-container">
        <span className="loader"></span>
      </div>
    );
  }

  if (error) {
    return <p className="error">{error}</p>;
  }

  const breadcrumbsConfig = [
    {
      title: "Все категории",
      isLink: true,
      route: "/",
    },
    {
      title: categories.find(item => item.eng === category).rus,
      isLink: false,
    },
  ];

  return (
    <div>
      <Breadcrumbs breadcrumbsConfig={breadcrumbsConfig} />
      <div className="products-grid">
        {products.map(product => (
          <ProductCard
            key={product.id}
            currentProduct={product}
            activeCategory={category}
            increase={increase}
            decrease={decrease}
            productsInCart={productsInCart}
          />
        ))}
      </div>
    </div>
  );
}
