import ProductItem from "../ProductItem";
import "./ProductList.css";

const ProductsList = (props) => {
  const { products, addToCartFromApp, removeFromCart } = props;

  const productsItems = products.map((product) => (
    <ProductItem
      key={product.id}
      product={product}
      addToCartFromApp={addToCartFromApp}
      removeFromCart={removeFromCart}
    />
  ));

  return <div className="products-wrapper">{productsItems}</div>;
};

export default ProductsList;
