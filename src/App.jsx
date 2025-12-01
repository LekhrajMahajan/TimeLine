import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { CartProvider } from './CartContext';
import { AuthProvider } from './AuthContext';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/Home';
import ShoppingCard from './pages/Shopingcard';
import Blog from './pages/Blog';
import Newsletter from './pages/Newsletter';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';

import Login from './auth/Login';   
import Signup from './auth/Signup'; 

const LandingPage = () => {
  return (
    <>
      <div id="home"><Home /></div>
      <div id="shop"><ShoppingCard /></div>
      <div id="blog"><Blog /></div>
      <div id="newsletter"><Newsletter /></div>
    </>
  );
};

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <Router>
          {/* PERMANENT DARK THEME: bg-black text-white */}
          <div className="min-h-screen flex flex-col bg-black text-white">
            
            <Navbar />

            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
            </Routes>

            <Footer />
            
          </div>
        </Router>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;