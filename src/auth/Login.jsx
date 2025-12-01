import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../AuthContext'; 

const WatchIcon = () => (
    <svg className="w-12 h-12 mx-auto text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 6V3m0 18v-3m-3.5-12.5L6 4.5m12 1.5l-2.5 2M4.5 18.5L7 16m10 2.5l-2.5-2.5"></path>
    </svg>
);

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const { login } = useAuth(); 
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const storedUser = JSON.parse(localStorage.getItem('registeredUser'));
        let finalName = "User";
        if (storedUser && storedUser.email === email) {
            finalName = storedUser.name; 
        } else {
            const namePart = email.split('@')[0];
            finalName = namePart.charAt(0).toUpperCase() + namePart.slice(1);
        }
        login({ name: finalName, email: email });
        navigate('/');
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white p-8">
            <div className="w-full max-w-md">
                <div className="relative isolate overflow-hidden bg-gray-900 border border-gray-700 px-6 py-12 text-center shadow-2xl rounded-3xl sm:px-12">
                    <WatchIcon />
                    <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-extrabold tracking-tight text-yellow-300 sm:text-4xl">
                        Welcome Back
                    </h2>
                    
                    <form className="mt-8 text-left space-y-6" onSubmit={handleSubmit}>
                        <div>
                            <label className="text-sm font-semibold text-gray-400">Email</label>
                            <input type="email" required className="mt-2 w-full rounded-full border-0 bg-white/5 px-4 py-3 text-white focus:ring-2 focus:ring-yellow-500" placeholder="you@example.com" value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div>
                            <label className="text-sm font-semibold text-gray-400">Password</label>
                            <input type="password" required className="mt-2 w-full rounded-full border-0 bg-white/5 px-4 py-3 text-white focus:ring-2 focus:ring-yellow-500" placeholder="••••••••" value={password} onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <button type="submit" className="w-full rounded-full bg-yellow-600 px-5 py-3 text-sm font-semibold text-black hover:bg-yellow-700 transition">
                            Login
                        </button>
                    </form>

                    <p className="mt-8 text-center text-sm text-gray-400">
                        Don't have an account?{' '}
                        <Link to="/signup" className="font-semibold text-blue-500 hover:text-blue-400 hover:underline">Sign up</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;