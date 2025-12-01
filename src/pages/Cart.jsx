import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../CartContext';

// Icons...
const TrashIcon = () => (<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>);
const LeftArrowIcon = () => (<svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>);

const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', minimumFractionDigits: 0 }).format(amount).replace('₹', '₹ ');
};

const Cart = () => {
    const { cartItems, updateQuantity, removeFromCart } = useCart();

    const subtotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
    const shippingFee = subtotal > 500000 || subtotal === 0 ? 0 : 1500;
    const total = subtotal + shippingFee;

    return (
        <div className="flex flex-col min-h-screen bg-black text-white font-sans">

            <main className="flex-grow pt-32 pb-12 px-4 sm:px-6 lg:px-8">
                <div className="w-full max-w-7xl mx-auto">
                    <h1 className="text-3xl md:text-4xl font-extrabold text-center mb-12 text-yellow-300 tracking-wider">
                        Shopping Cart
                    </h1>

                    {cartItems.length === 0 ? (
                        <div className="text-center py-20 bg-gray-900 rounded-xl border border-gray-700">
                            <h2 className="text-2xl font-bold text-gray-400 mb-4">Your cart is empty.</h2>
                            <Link to="/" className="inline-block px-8 py-3 bg-yellow-400 text-black font-bold rounded-full hover:bg-yellow-500 transition">
                                Go to Shop
                            </Link>
                        </div>
                    ) : (
                        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
                            {/* Cart Items List */}
                            <div className="flex-grow lg:w-2/3">
                                <div className="space-y-6">
                                    {cartItems.map((item) => (
                                        <div key={item.id} className="flex flex-col sm:flex-row items-center gap-6 p-4 bg-gray-900 border border-gray-700 rounded-xl shadow-lg">
                                            <img src={item.image} alt={item.title} className="w-full sm:w-24 h-48 sm:h-24 rounded-lg object-cover bg-gray-800" />
                                            <div className="flex-grow text-center sm:text-left w-full">
                                                <span className="text-xs font-bold text-yellow-400 uppercase">{item.brand}</span>
                                                <h3 className="text-lg font-semibold text-white mt-1">{item.title}</h3>
                                                <p className="text-md text-gray-300 mt-1">{formatCurrency(item.price)}</p>
                                            </div>

                                            <div className="flex items-center justify-between w-full sm:w-auto mt-2 sm:mt-0">
                                                <div className="flex items-center gap-3 bg-gray-800 rounded-lg p-1">
                                                    <button className="px-3 py-1 text-gray-400 hover:text-white" onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                                                    <span className="text-sm font-medium w-4 text-center">{item.quantity}</span>
                                                    <button className="px-3 py-1 text-gray-400 hover:text-white" onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                                                </div>
                                                <button className="text-red-500 hover:text-red-400 ml-6 p-2" onClick={() => removeFromCart(item.id)}>
                                                    <TrashIcon />
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Summary */}
                            <div className="lg:w-1/3">
                                <div className="bg-gray-900 border border-gray-700 rounded-xl shadow-lg p-6 sticky top-32">
                                    <h2 className="text-2xl font-semibold text-white mb-6">Order Summary</h2>
                                    <div className="space-y-4">
                                        <div className="flex justify-between text-gray-300"><span>Subtotal</span><span className="font-mono">{formatCurrency(subtotal)}</span></div>
                                        <div className="flex justify-between text-gray-300"><span>Shipping</span><span className="font-mono">{shippingFee === 0 ? 'Free' : formatCurrency(shippingFee)}</span></div>
                                        <div className="border-t border-gray-700 my-2"></div>
                                        <div className="flex justify-between text-white text-xl font-bold"><span>Total</span><span className="text-yellow-400 font-mono">{formatCurrency(total)}</span></div>
                                    </div>
                                    <Link
                                        to="/checkout"
                                        className="block w-full text-center mt-8 px-6 py-4 rounded-full font-bold uppercase text-sm tracking-wider transition duration-300 bg-yellow-400 hover:bg-yellow-500 text-black shadow-lg shadow-yellow-400/20 hover:shadow-yellow-400/40 transform hover:-translate-y-0.5"
                                    >
                                        Proceed to Checkout
                                    </Link>
                                    <Link to="/" className="group flex items-center justify-center w-full text-center mt-6 text-sm font-semibold text-gray-400 hover:text-yellow-300">
                                        <LeftArrowIcon /> Back to Shop
                                    </Link>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </main>
        </div>
    );
};

export default Cart;