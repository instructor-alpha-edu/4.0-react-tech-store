import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { categories } from "../data/categories";
import Breadcrumbs from "../components/Breadcrumbs";

export default function SingleProductPage() {
  const { id, category } = useParams();

  const [currentProduct, setCurrentProduct] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchSingleProduct(productId) {
      try {
        setIsLoading(true);
        const response = await fetch("https://dummyjson.com/products/" + productId);
        const data = await response.json();
        console.log(data);
        setCurrentProduct(data);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchSingleProduct(id);
  }, [id]);

  if (isLoading) {
    return (
      <div className="loader-container">
        <span className="loader"></span>
      </div>
    );
  }

  const breadcrumbsConfig = [
    {
      title: "Все категории",
      isLink: true,
      route: "/",
    },
    {
      title: categories.find(item => item.eng === category).rus,
      isLink: true,
      route: `/products/${category}`,
    },
    {
      title: currentProduct.title,
      isLink: false,
    },
  ];

  return (
    <div>
      <Breadcrumbs breadcrumbsConfig={breadcrumbsConfig} />
      <div>Название товара: {currentProduct.title}</div>
      <div>Цена товара: {currentProduct.price}$</div>
      <div>Оценка товара: {currentProduct.rating}/5.0</div>
    </div>
  );
}
