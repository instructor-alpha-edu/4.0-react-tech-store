import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { axiosInstance } from "../services/axios";
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
        const { data } = await axiosInstance.get("/products/" + productId);
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
      <div className="product-page">
        <div className="product-page__image">
          <img src={currentProduct.thumbnail} alt={currentProduct.title} />
        </div>
        <div className="product-page__info">
          <h1 className="product-page__title">{currentProduct.title}</h1>
          {currentProduct.brand && <p className="product-page__brand">{currentProduct.brand}</p>}
          <p className="product-page__description">{currentProduct.description}</p>
          <div className="product-page__price">
            <span>{currentProduct.price}$</span>
            {currentProduct.discountPercentage > 0 && (
              <span className="product-page__discount">-{currentProduct.discountPercentage}%</span>
            )}
          </div>
          <div className="product-page__rating">Рейтинг: {currentProduct.rating}/5.0</div>
          <div className="product-page__details">
            <div>Наличие: {currentProduct.availabilityStatus}</div>
            <div>На складе: {currentProduct.stock} шт.</div>
            <div>Гарантия: {currentProduct.warrantyInformation}</div>
            <div>Доставка: {currentProduct.shippingInformation}</div>
            <div>Возврат: {currentProduct.returnPolicy}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
