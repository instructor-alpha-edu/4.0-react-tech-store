import Header from "./components/Header";
import Categories from "./components/Categories";
import "./assets/css/style.css";
import Products from "./components/Products";

export default function App() {
  return (
    <div className="app">
      <Header />
      <Categories />
      <Products />
    </div>
  );
}
