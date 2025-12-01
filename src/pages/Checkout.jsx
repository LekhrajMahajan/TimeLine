import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../CartContext'; 

const Checkout = () => {
  const { cartItems } = useCart();
  const navigate = useNavigate();

  // Form State
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    city: '',
    zip: '',
    cardNumber: '',
    expiry: '',
    cvv: ''
  });

  // Calculate Totals
  const subtotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  const shippingFee = subtotal > 500000 || subtotal === 0 ? 0 : 1500;
  const total = subtotal + shippingFee;

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', minimumFractionDigits: 0 }).format(amount).replace('₹', '₹ ');
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Order Placed Successfully! Thank you for shopping with TimeLine.");
    navigate('/'); 
  };

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center pt-20">
        <h2 className="text-2xl font-bold text-gray-400 mb-4">Your cart is empty.</h2>
        <Link to="/" className="px-8 py-3 bg-yellow-400 text-black font-bold rounded-full hover:bg-yellow-500">
            Go to Shop
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white font-sans pt-32 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-extrabold text-center mb-12 text-yellow-300 tracking-wider">
            Secure Checkout
        </h1>

        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Left Column: Forms */}
          <div className="flex-grow lg:w-2/3 space-y-8">
            
            {/* Shipping Form */}
            <div className="bg-gray-900 border border-gray-700 p-6 rounded-xl shadow-lg">
              <h2 className="text-xl font-semibold mb-6 text-white border-b border-gray-700 pb-2">Shipping Information</h2>
              <form id="checkout-form" onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-1">First Name</label>
                  <input required name="firstName" onChange={handleChange} type="text" className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-yellow-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-1">Last Name</label>
                  <input required name="lastName" onChange={handleChange} type="text" className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-yellow-500" />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-400 mb-1">Email Address</label>
                  <input required name="email" onChange={handleChange} type="email" className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-yellow-500" />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-400 mb-1">Address</label>
                  <input required name="address" onChange={handleChange} type="text" className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-yellow-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-1">City</label>
                  <input required name="city" onChange={handleChange} type="text" className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-yellow-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-1">ZIP Code</label>
                  <input required name="zip" onChange={handleChange} type="text" className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-yellow-500" />
                </div>
              </form>
            </div>

            {/* Payment Dummy Form */}
            <div className="bg-gray-900 border border-gray-700 p-6 rounded-xl shadow-lg">
              <h2 className="text-xl font-semibold mb-6 text-white border-b border-gray-700 pb-2">Payment Details</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-400 mb-1">Card Number</label>
                  <input name="cardNumber" onChange={handleChange} type="text" placeholder="0000 0000 0000 0000" className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-yellow-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-1">Expiry Date</label>
                  <input name="expiry" onChange={handleChange} type="text" placeholder="MM/YY" className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-yellow-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-1">CVV</label>
                  <input name="cvv" onChange={handleChange} type="text" placeholder="123" className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-yellow-500" />
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Order Summary */}
          <div className="lg:w-1/3">
            <div className="bg-gray-900 border border-gray-700 rounded-xl shadow-lg p-6 sticky top-32">
              <h2 className="text-xl font-semibold text-white mb-6">Order Summary</h2>
              
              <div className="space-y-4 mb-6 max-h-60 overflow-y-auto pr-2 custom-scrollbar">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex justify-between items-center text-sm">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded bg-gray-800 bg-cover bg-center" style={{backgroundImage: `url(${item.image})`}}></div>
                        <div>
                            <p className="text-white font-medium">{item.title}</p>
                            <p className="text-gray-400 text-xs">Qty: {item.quantity}</p>
                        </div>
                    </div>
                    <span className="text-gray-300">{formatCurrency(item.price * item.quantity)}</span>
                  </div>
                ))}
              </div>

              <div className="border-t border-gray-700 my-4"></div>

              <div className="space-y-3">
                <div className="flex justify-between text-gray-300">
                  <span>Subtotal</span>
                  <span className="font-mono">{formatCurrency(subtotal)}</span>
                </div>
                <div className="flex justify-between text-gray-300">
                  <span>Shipping</span>
                  <span className="font-mono">{shippingFee === 0 ? 'Free' : formatCurrency(shippingFee)}</span>
                </div>
                <div className="flex justify-between text-white text-xl font-bold pt-4 border-t border-gray-700">
                  <span>Total</span>
                  <span className="text-yellow-400 font-mono">{formatCurrency(total)}</span>
                </div>
              </div>

              <button 
                type="submit" 
                form="checkout-form"
                className="w-full mt-8 px-6 py-4 rounded-full font-bold uppercase text-sm tracking-wider transition duration-300 bg-yellow-400 hover:bg-yellow-500 text-black shadow-lg shadow-yellow-400/20"
              >
                Place Order
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Checkout;