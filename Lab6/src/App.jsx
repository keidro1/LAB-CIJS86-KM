import { useState } from "react";
import "./App.css";
import Cart from "./components/Cart";
import ProductsList from "./components/ProductsList";
import { products } from "./mockProducts";

function App() {
  const [productsInCart, setProductsInCart] = useState([]);
  console.log("productsInCart", productsInCart);

  const [totalPrice, setTotalPrice] = useState(0);
  
  const addToCartFromApp = (productItem) => {
    // productsInCart.push(productItem);
    // console.log("Products in cart: ", productsInCart);
    // setProductsInCart
    const newProductsInCart = [...productsInCart, productItem];
    setProductsInCart(newProductsInCart);
    
    const newTotalPrice = totalPrice + productItem.price;
    setTotalPrice(newTotalPrice);
  };

  const removeFromCart = (productItem) =>{
    const updatedProductsInCart = productsInCart.filter(
      (item) => item.name !== productItem.name
    );
    setProductsInCart(updatedProductsInCart);

    const newTotalPrice = updatedProductsInCart.reduce(
      (total, item) => total + item.price,
      0
    );
    setTotalPrice(newTotalPrice);
  };
  

  return (
    <div>
      <Cart productsInCart={productsInCart} totalPrice={totalPrice} />
      <ProductsList products={products} addToCartFromApp={addToCartFromApp} removeFromCart={removeFromCart} />
    </div>
  );
}

export default App;