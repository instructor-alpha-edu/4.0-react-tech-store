import ProductCard from "./ProductCard";

export default function Products({ products, setProducts, activeCategory }) {
  return (
    <div className="products-grid">
      {products
        .filter(product => product.category === activeCategory)
        .map(product => (
          <ProductCard
            key={product.id}
            currentProduct={product}
            products={products}
            setProducts={setProducts}
          />
        ))}
    </div>
  );
}
