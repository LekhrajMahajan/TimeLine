import React from 'react';

const InstagramIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" d="M12.315 2.315C10.15 2.315 9.874 2.324 8.91 2.36C5.002 2.534 2.534 5.002 2.36 8.91C2.324 9.874 2.315 10.15 2.315 12.315C2.315 14.48 2.324 14.755 2.36 15.72C2.534 19.627 5.002 22.096 8.91 22.27C9.874 22.306 10.15 22.315 12.315 22.315C14.48 22.315 14.755 22.306 15.72 22.27C19.627 22.096 22.096 19.627 22.27 15.72C22.306 14.755 22.315 14.48 22.315 12.315C22.315 10.15 22.306 9.874 22.27 8.91C22.096 5.002 19.627 2.534 15.72 2.36C14.755 2.324 14.48 2.315 12.315 2.315ZM12 7.042c-2.738 0-4.958 2.22-4.958 4.958S9.262 16.958 12 16.958S16.958 14.738 16.958 12S14.738 7.042 12 7.042ZM12 14.87c-1.583 0-2.87-1.287-2.87-2.87S10.417 9.13 12 9.13S14.87 10.417 14.87 12S13.583 14.87 12 14.87ZM16.905 8.127c-.832 0-1.507-.675-1.507-1.507S16.073 5.113 16.905 5.113S18.412 5.788 18.412 6.62S17.737 8.127 16.905 8.127Z" clipRule="evenodd" />
  </svg>
);

const YouTubeIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" d="M19.812 5.438c.34.34.562.75.688 1.25.125.5.188 1.188.188 2.063v2.5c0 .875-.063 1.563-.188 2.063-.125.5-.348.91-.688 1.25-.34.34-.75.562-1.25.688-.5.125-1.188.188-2.063.188h-5c-.875 0-1.563-.063-2.063-.188-.5-.125-.91-.348-1.25-.688-.34-.34-.562-.75-.688-1.25-.125-.5-.188-1.188-.188-2.063v-2.5c0-.875.063-1.563.188-2.063.125-.5.348-.91.688-1.25.34-.34.75-.562 1.25-.688.5-.125 1.188-.188 2.063-.188h5c.875 0 1.563.063 2.063.188.5.125.91.348 1.25.688ZM9.938 12.688l5-2.188-5-2.188v4.376Z" clipRule="evenodd" />
  </svg>
);

const LinkedInIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" d="M19 0H5a5 5 0 00-5 5v14a5 5 0 005 5h14a5 5 0 005-5V5a5 5 0 00-5-5zM8 19H5V8h3v11zM6.5 6.5A1.5 1.5 0 118 5a1.5 1.5 0 01-1.5 1.5zM19 19h-3v-5.5c0-1.33-.02-3.04-1.85-3.04C12.39 10.46 12.14 12.1 12.14 13.5V19h-3V8h2.88v1.32H12a3.17 3.17 0 012.87-1.59c3.07 0 3.64 2.02 3.64 4.64V19z" clipRule="evenodd" />
  </svg>
);


const Footer = () => {
    return (
        // Footer wrapper with yellow background and black text
        <footer className="bg-yellow-400 text-black">
            <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
                {/* Logo or Title */}
                <div className="text-center mb-12">
                    <span className="text-3xl md:text-4xl font-extrabold tracking-tight">
                        TimeLine
                    </span>
                    <p className="mt-2 text-sm text-gray-800">Luxury Timepieces Collection</p>
                </div>

                {/* Links Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {/* Quick Links */}
                    <div>
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-black">Quick Links</h3>
                        <ul className="mt-4 space-y-3">
                            <li><a href="#" className="text-base text-gray-800 hover:text-black hover:underline">Home</a></li>
                            <li><a href="#" className="text-base text-gray-800 hover:text-black hover:underline">Shop</a></li>
                            <li><a href="#" className="text-base text-gray-800 hover:text-black hover:underline">About</a></li>
                            <li><a href="#" className="text-base text-gray-800 hover:text-black hover:underline">Contact</a></li>
                        </ul>
                    </div>

                    {/* Customer Service */}
                    <div>
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-black">Customer Service</h3>
                        <ul className="mt-4 space-y-3">
                            <li><a href="#" className="text-base text-gray-800 hover:text-black hover:underline">Return Policy</a></li>
                            <li><a href="#" className="text-base text-gray-800 hover:text-black hover:underline">Warranty</a></li>
                            <li><a href="#" className="text-base text-gray-800 hover:text-black hover:underline">Shipping</a></li>
                            <li><a href="#" className="text-base text-gray-800 hover:text-black hover:underline">FAQ</a></li>
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-black">Legal</h3>
                        <ul className="mt-4 space-y-3">
                            <li><a href="#" className="text-base text-gray-800 hover:text-black hover:underline">Privacy Policy</a></li>
                            <li><a href="#" className="text-base text-gray-800 hover:text-black hover:underline">Terms of Service</a></li>
                        </ul>
                    </div>

                    {/* Social Media */}
                    <div>
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-black">Connect</h3>
                        <div className="flex space-x-6 mt-4">
                            <a href="#" className="text-gray-800 hover:text-black">
                                <span className="sr-only">Instagram</span>
                                <InstagramIcon />
                            </a>
                            <a href="#" className="text-gray-800 hover:text-black">
                                <span className="sr-only">YouTube</span>
                                <YouTubeIcon />
                            </a>
                            <a href="#" className="text-gray-800 hover:text-black">
                                <span className="sr-only">LinkedIn</span>
                                <LinkedInIcon />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="mt-16 border-t border-black/20 pt-8 text-center">
                    <p className="text-sm text-gray-800">
                        &copy; {new Date().getFullYear()} TimeLine. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;