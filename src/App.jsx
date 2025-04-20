import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Main/Home';
import Contact from './Main/Contact';
import About from './Main/About';
import Nav from './Navlist/Nav';
import Login from './Main/Login';
import CartComponent from './Main/Cart'; 
import Footer from './Components/Footer/Footer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Shop from './Main/Shop';




function App() {
  const [cart, setCart] = useState([]);
  const [items, setItems] = useState([]);
  const [count, setCount] = useState(0);

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
    toast.success("Cart added Successfully");
    setCount(count + 1);
  };

  const handleRemoveFromCart = (productId) => {
    setCart(cart.filter((product) => product.id !== productId));
    toast.success("Cart removed Successfully");
    setCount(count - 1);
  };

  const handleAddItem = (newItem) => {
    setItems([...items, newItem]); 
  };

  const handleRemoveItem = (itemName) => {
    setItems(items.filter((item) => item.title !== itemName)); 
  };

  return (
    <div>
      <BrowserRouter>
        <Nav count={count} />
        <Routes>
          <Route path="/" element={<Home handleAddToCart={handleAddToCart} />} />
          <Route path="/shop" element={<Shop handleAddToCart={handleAddToCart} />} />
          <Route path="/shop/:category" element={<Shop handleAddToCart={handleAddToCart} />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
         
          <Route
            path="/cart"
            element={<CartComponent cart={cart} handleRemoveFromCart={handleRemoveFromCart} />}
          />
        </Routes>
        <Footer />
        <ToastContainer position="top-right" autoClose={2000} />
      </BrowserRouter>
    </div>
  );
}

export default App;
