import React, { useState } from 'react';
import { useCart } from '../CartContext'; 

const ChevronDown = () => (
    <svg className="w-6 h-6 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7"></path>
    </svg>
);

// Helper function to generate 50 products using LOCAL images
const generateProducts = () => {
    const productList = [];
    
    // Brands list
    const brandsData = [
        { name: "ROLEX", models: ["Submariner", "Datejust", "Daytona"] },
        { name: "OMEGA", models: ["Seamaster", "Speedmaster", "De Ville"] },
        { name: "TITAN", models: ["Neo", "Octane", "Raga"] },
        { name: "CASIO", models: ["Edifice", "G-Shock", "Enticer"] },
        { name: "FOSSIL", models: ["Grant", "Machine", "Townsman"] },
        { name: "TAG HEUER", models: ["Carrera", "Formula 1"] },
        { name: "TIMEX", models: ["Waterbury", "Weekender"] },
        { name: "SEIKO", models: ["Presage", "Prospex", "5 Sports"] },
        { name: "CITIZEN", models: ["Eco-Drive", "Promaster"] },
        { name: "TOMMY HILFIGER", models: ["Hendrix", "Kane"] }
    ];

    for (let i = 1; i <= 50; i++) {
        const brandObj = brandsData[Math.floor(Math.random() * brandsData.length)];
        const model = brandObj.models[Math.floor(Math.random() * brandObj.models.length)];
        const imageIndex = (i % 9) + 1; 
        const localImage = `/image${imageIndex}.png`; 
        const price = Math.floor(Math.random() * (10000 - 1000 + 1) + 1000);
        const formattedPrice = new Intl.NumberFormat('en-IN').format(price);

        productList.push({
            id: i,
            brand: brandObj.name,
            title: `${model} Series ${i}`,
            price: formattedPrice,
            image: localImage // Using local path
        });
    }
    return productList;
};

const products = generateProducts();

const ShoppingCard = () => {
    const [visibleCount, setVisibleCount] = useState(6);
    const { addToCart } = useCart(); 

    const handleLoadMore = () => {
        setVisibleCount(products.length); 
    };

    const visibleProducts = products.slice(0, visibleCount);
    const isAllVisible = visibleCount >= products.length;

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white p-8 pt-32" id="shop">
            <div className="w-full max-w-7xl">
                <h2 className="text-4xl font-extrabold text-center mb-12 text-yellow-300 tracking-wider">
                    Premium Collection
                </h2>
                
                <p className="text-center text-gray-400 mb-8">
                    Displaying {visibleProducts.length} of {products.length} Timepieces
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {visibleProducts.map((product) => (
                        <div key={product.id} className="group relative h-96 w-full rounded-xl overflow-hidden shadow-2xl border border-gray-800 hover:border-yellow-600 transition-all duration-300 transform hover:-translate-y-2">
                            
                            {/* Background Image using Local File */}
                            <div 
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                style={{ backgroundImage: `url(${product.image})` }}
                            />
                            
                            {/* Dark Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>

                            {/* Content */}
                            <div className="absolute inset-0 p-6 flex flex-col justify-between">
                                {/* Top Badge */}
                                <div className="flex justify-between items-start">
                                    <span className="text-xs font-bold bg-yellow-500 text-black px-3 py-1 rounded-full uppercase tracking-wider shadow-lg">
                                        {product.brand}
                                    </span>
                                </div>

                                {/* Bottom Info */}
                                <div className="text-center translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                                    <h3 className="text-xl font-bold text-white mb-1 drop-shadow-md">{product.title}</h3>
                                    
                                    <p className="text-sm text-gray-300 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        Premium Quality • 1 Year Warranty
                                    </p>
                                    
                                    <div className="flex flex-col sm:flex-row justify-center items-center gap-3 mt-2">
                                        <div className="px-4 py-2 rounded-full font-mono font-bold bg-gray-800/80 text-yellow-300 border border-gray-600 backdrop-blur-sm">
                                            ₹ {product.price}
                                        </div>
                                        
                                        <button 
                                            onClick={() => addToCart(product)}
                                            className="px-6 py-2 rounded-full font-bold bg-yellow-500 text-black hover:bg-white transition-colors duration-300 shadow-lg shadow-yellow-500/20"
                                        >
                                            Add to Cart
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                
                {/* Load More Button */}
                {!isAllVisible && (
                    <div className="mt-16 text-center">
                        <button 
                            onClick={handleLoadMore} 
                            className="group flex flex-col items-center mx-auto text-gray-400 hover:text-yellow-300 transition-colors duration-300"
                        >
                            <span className="text-sm font-semibold uppercase tracking-widest mb-2">View Full Collection</span>
                            <div className="p-3 rounded-full border border-gray-700 bg-gray-900 group-hover:border-yellow-500 group-hover:bg-gray-800 transition-all shadow-lg animate-pulse hover:animate-none">
                                <ChevronDown />
                            </div>
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ShoppingCard;