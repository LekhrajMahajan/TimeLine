import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../CartContext'; 
import { useAuth } from '../AuthContext'; 

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const [currentActiveLink, setCurrentActiveLink] = useState("Home");
  
  const { cartItems } = useCart(); 
  const { user, logout } = useAuth(); 

  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleLinkClick = (name) => {
    setCurrentActiveLink(name);
    setIsMenuOpen(false);
  };

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Shop", href: "#shop" },
    { name: "Blog", href: "#blog" },
    { name: "Newsletter", href: "#newsletter" },
  ];

  return (
    <> 
      <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
        <div className="max-w-6xl mx-auto mt-4 mb-4 md:mt-6 p-2 rounded-[30px] shadow-2xl backdrop-blur-xl bg-white/10 border border-white/20">
            <div className="flex flex-wrap items-center justify-between p-2">
                
                <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse" onClick={() => handleLinkClick('Home')}>
                    <span className="self-center text-xl md:text-2xl font-extrabold whitespace-nowrap text-white drop-shadow-lg">
                    TimeLine
                    </span>
                </Link>

                <button onClick={toggleMenu} type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/50 transition duration-150 ease-in-out">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
                    </svg>
                </button>

                <div className={`w-full md:block md:w-auto transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-96 opacity-100' : 'hidden md:max-h-full md:opacity-100'}`} id="navbar-default">
                    <div className="flex flex-col md:flex-row md:items-center space-y-3 md:space-y-0 md:space-x-4">
                        <ul className="font-medium flex flex-col p-4 md:p-0 border border-white/20 rounded-xl bg-white/10 md:flex-row md:space-x-4 md:border-0 md:bg-transparent shadow-lg md:shadow-none">
                        {isHomePage ? (
                            navLinks.map((link) => {
                                const isSelected = link.name === currentActiveLink;
                                return (
                                <li key={link.name}>
                                    <a href={link.href} onClick={() => handleLinkClick(link.name)} className={`block py-2 px-4 transition duration-200 ease-in-out rounded-lg font-semibold ${isSelected ? 'text-yellow-300 bg-white/20' : 'text-white hover:bg-white/10'} md:p-2`}>
                                        {link.name}
                                    </a>
                                </li>
                                );
                            })
                        ) : (
                            navLinks.map((link) => (
                                <li key={link.name}>
                                    <Link to={`/${link.href}`} onClick={() => handleLinkClick(link.name)} className={`block py-2 px-4 transition duration-200 ease-in-out rounded-lg font-semibold text-white hover:bg-white/10 md:p-2`}>
                                        {link.name}
                                    </Link>
                                </li>
                            ))
                        )}
                        </ul>

                        <div className="flex justify-center md:justify-start items-center space-x-3 p-2 md:p-0">
                            
                            {user ? (
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-yellow-400 text-black font-extrabold flex items-center justify-center text-lg shadow-lg border-2 border-yellow-200" title={user.name}>
                                        {user.name.charAt(0).toUpperCase()}
                                    </div>
                                    
                                    <button 
                                        onClick={logout} 
                                        className="text-sm font-medium text-gray-300 hover:text-white hover:underline transition"
                                    >
                                        Logout
                                    </button>
                                </div>
                            ) : (
                                <Link to="/login" onClick={() => handleLinkClick('Login')} className="px-6 py-2 text-sm font-bold rounded-full transition duration-300 text-black bg-yellow-400 hover:bg-yellow-500 shadow-md shadow-yellow-500/30">
                                    Login
                                </Link>
                            )}

                            <Link to="/cart" onClick={() => handleLinkClick('Cart')} className={`relative p-2 rounded-full transition duration-300 text-white border border-white/30 hover:bg-white/10 ${location.pathname === '/cart' ? 'text-yellow-300 border-yellow-300' : ''}`}>
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.2 7h14.4l-2.2-7H7z" />
                                </svg>
                                {totalItems > 0 && (
                                    <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full border-2 border-black">
                                        {totalItems}
                                    </span>
                                )}
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;