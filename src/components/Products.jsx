import ProductCard from "./ProductCard";

export default function Products({ products, setProducts, activeCategory }) {
  console.log("Products from App.jsx:", products);

  return (
    <div className="products-grid">
      {products
        // .filter(product => product.category === activeCategory)
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
