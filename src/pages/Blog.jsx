import React from 'react';

const RightArrowIcon = () => (
    <svg className="w-4 h-4 ml-2 transition-transform duration-200 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
    </svg>
);

const blogPosts = [
    {
        id: 1,
        category: "Maintenance",
        title: "Tips for Maintaining Automatic Watches",
        snippet: "Keep your automatic watch precise by winding it regularly, even on days you don't wear it. Avoid strong magnetic fields...",
        imageUrl: "/image11.png" 
    },
    {
        id: 2,
        category: "Technology",
        title: "The Rise of Smartwatches in Luxury",
        snippet: "Smartwatches have evolved from notification centers to sophisticated health monitors... forcing luxury brands to innovate.",
        imageUrl: "/image10.png" 
    },
    {
        id: 3,
        category: "Reviews",
        title: "Top 5 Diving Watches of 2025",
        snippet: "As we look at 2025, the dive watch category remains iconic. Classics like the Rolex Submariner and Omega Seamaster 300M continue to lead...",
        imageUrl: "/image12.png" 
    }
];

const Blog = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-yellow-400 text-black p-8">
            <div className="w-full max-w-7xl">
                
                <h2 className="text-4xl font-extrabold text-center mb-12 text-black tracking-wider">
                    From the Journal
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    
                    {blogPosts.map((post) => (
                        <div
                            key={post.id}
                            className="bg-gray-900 border border-gray-700 rounded-xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-300"
                        >
                            {/* (Image Section) */}
                            <div className="h-48 w-full bg-cover bg-center" style={{ backgroundImage: `url(${post.imageUrl})` }}>
                            </div>

                            {/* (Content Section) */}
                            <div className="p-6">
                                <span className="inline-block px-3 py-1 text-xs font-semibold uppercase rounded-full bg-yellow-600 text-black mb-3">
                                    {post.category}
                                </span>
                                <h3 className="text-xl font-bold mb-2 text-white h-16">
                                    {post.title}
                                </h3>
                                <p className="text-sm text-gray-400 mb-4 h-24 overflow-hidden">
                                    {post.snippet}
                                </p>
                                <a 
                                    href="#" 
                                    className="group inline-flex items-center font-semibold text-black bg-yellow-400 hover:bg-yellow-500 transition-colors duration-200 px-4 py-2 rounded-full shadow-lg shadow-yellow-500/30"
                                >
                                    Read More
                                    <RightArrowIcon />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Blog;