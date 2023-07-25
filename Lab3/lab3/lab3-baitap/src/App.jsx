import React from "react";
import Header from "./components/Header";
import Product from "./components/Product";
import Banner from "./components/Banner";
import Shipping from "./components/shipping";
import Footer from "./components/Footer";

function App() {
  const data = [
    {
      image:"./assets/images/products/product-1.jpg",
      category:"Watches",
      title:"Xiaomi Mi Band 5",
      review:"4", 
      price:"$199.00",
    },
    {
      image:"./assets/images/products/product-2.jpg", 
      category:"Speaker", 
      title:"Big Power Sound Speaker", 
      review:"5", 
      price:"$275.00", 
      discountPrice:"$300.00",
    },
    {
      image:"./assets/images/products/product-3.jpg", 
      category:"Camera", 
      title:"WiFi Security Camera", 
      review:"5", 
      price:"$399.00",
    },
    {
      image:"./assets/images/products/product-4.jpg", 
      category:"Phones", 
      title:"iphone 6x plus", 
      review:"5", 
      price:"$400.00",
    },
    {
      image:"./assets/images/products/product-5.jpg", 
      category:"Headphones", 
      title:"Wireless Headphones", 
      review:"5", 
      price:"$350.00",
    },
    {
      image:"./assets/images/products/product-6.jpg", 
      category:"Speaker", 
      title:"Mini Bluetooth Speaker", 
      review:"4", 
      price:"$70.00",
    },
    {
      image:"./assets/images/products/product-7.jpg", 
      category:"Headphones", 
      title:"PX7 Wireless Headphones", 
      review:"4", 
      price:"$100.00", 
      discountPrice:"$200.00",
    },
    {
      image:"./assets/images/products/product-8.jpg", 
      category:"Laptop", 
      title:"Apple MacBook Air", 
      review:"5", 
      price:"$899.00", 
    },
  ];

  const shippingInfo = [
    {
      icon: "lni lni-delivery",
      title: "Free Shipping",
      description: "On order over $99",
    },
    {
      icon: "lni lni-support",
      title: "24/7 Support",
      description: "Live Chat Or Call",
    },
    {
      icon: "lni lni-credit-cards",
      title: "Online Payment",
      description: "Secure Payment Services",
    },
    {
      icon: "lni lni-reload",
      title: "Easy Return",
      description: "Hassle Free Shopping",
    },
  ];

  return (
    <div>
      <Preloader />
      <Header />
      <Container/>
      <Banner/>
      <Product Product ={data}/>
      <Callaction/>
      <Shipping Shipping={shippingInfo}/>
      <Footer />
    </div>
  );
};

export default App;
