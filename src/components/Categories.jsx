export default function Categories({ categories, activeCategory, setActiveCategory }) {
  return (
    <ul className="categories">
      {categories.map(categoryItem => (
        <li
          key={categoryItem.eng}
          className={
            activeCategory === categoryItem.eng
              ? "categories-btn categories-btn__active"
              : "categories-btn"
          }
          onClick={() => setActiveCategory(categoryItem.eng)}
        >
          {categoryItem.rus}
        </li>
      ))}
    </ul>
  );
}
