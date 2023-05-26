import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";

import { CategoriesContext } from "../../context/categories.context";
import ProductCard from "../../components/product-card/product-card.component";

import "./category.styles.scss";

const Category = () => {
  const { category } = useParams();
  const { categoriesMap } = useContext(CategoriesContext);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container">
      <h2 className="category-title">{category.toUpperCase()}</h2>
      <div className="products-container">
        {categoriesMap[category] &&
          categoriesMap[category].map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </div>
  );
};

export default Category;
