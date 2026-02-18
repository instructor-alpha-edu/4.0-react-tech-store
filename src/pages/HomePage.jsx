import { Link } from "react-router";
import { categories } from "../data/categories";

export default function HomePage() {
  return (
    <div className="categories-grid">
      {categories.map(category => (
        <Link to={`/products/${category.eng}`} className="categories-card">
          {category.rus}
        </Link>
      ))}
    </div>
  );
}
