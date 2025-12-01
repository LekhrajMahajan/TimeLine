import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const MailIcon = () => (
    <svg className="w-5 h-5 ml-2 -mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
    </svg>
);

const Newsletter = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault(); // पेज रीलोड होने से रोकता है

        // 👇 अपनी EmailJS Keys यहाँ डालें
        const SERVICE_ID = "service_bkk5aav"; 
        const TEMPLATE_ID = "template_uev091g";
        const PUBLIC_KEY = "3VmRU9ERAtcgEym02";

        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
            .then((result) => {
                console.log(result.text);
                alert("Subscribed successfully! Email sent to Admin.");
                e.target.reset(); // फॉर्म क्लियर करें
            }, (error) => {
                console.log(error.text);
                alert("Failed to subscribe. Please try again.");
            });
    };

    return (
        <div className="bg-black py-16 sm:py-24" id="newsletter">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="relative isolate overflow-hidden bg-gray-900 border border-gray-700 px-6 py-20 text-center shadow-2xl rounded-3xl sm:px-16">
                    
                    <h2 className="mx-auto max-w-2xl text-3xl font-extrabold tracking-tight text-yellow-300 sm:text-4xl">
                        Join Our Club
                    </h2>
                    
                    <p className="mx-auto mt-4 max-w-xl text-lg leading-7 text-gray-300">
                        Join our club for exclusive launches and offers on luxury timepieces.
                    </p>
                    
                    {/* Form में ref और onSubmit जोड़ें */}
                    <form ref={form} onSubmit={sendEmail} className="mt-8 flex items-center justify-center gap-x-3">
                        <label htmlFor="email-address" className="sr-only">
                            Email address
                        </label>
                        {/* Input में name="user_email" होना जरुरी है ताकि EmailJS इसे पहचान सके */}
                        <input
                            id="email-address"
                            name="user_email" 
                            type="email"
                            autoComplete="email"
                            required
                            className="min-w-0 flex-auto rounded-full border-0 bg-white/5 px-4 py-3 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-yellow-500 sm:text-sm sm:leading-6"
                            placeholder="Enter your email"
                        />
                        <button
                            type="submit"
                            className="flex-none rounded-full bg-yellow-600 px-5 py-3 text-sm font-semibold text-black shadow-lg shadow-yellow-500/30 hover:bg-yellow-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-500 transition-colors duration-200"
                        >
                            Subscribe
                            <MailIcon />
                        </button>
                    </form>

                    <svg
                        viewBox="0 0 1024 1024"
                        className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2"
                        aria-hidden="true"
                    >
                        <circle cx={512} cy={512} r={512} fill="url(#newsletter-gradient)" fillOpacity="0.3" />
                        <defs>
                            <radialGradient
                                id="newsletter-gradient"
                                cx={0}
                                cy={0}
                                r={1}
                                gradientUnits="userSpaceOnUse"
                                gradientTransform="translate(512 512) rotate(90) scale(512)"
                            >
                                <stop stopColor="#fcd34d" />
                                <stop offset={1} stopColor="#1f2937" stopOpacity={0} />
                            </radialGradient>
                        </defs>
                    </svg>
                </div>
            </div>
        </div>
    );
};

export default Newsletter;