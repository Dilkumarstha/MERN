'use client';
import { REGISTER_ROUTE } from '@/constants/routes';
import { useState } from 'react';

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login attempt:', { username, password });
    // Handle login logic here
  };

  return (
    <div className="w-200  flex items-center justify-center px-4">
      <div className="bg-gray-900 p-8 rounded-lg shadow-2xl w-full max-w-md border border-red-600">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-red-500 mb-2">Login</h1>
          <p className="text-gray-300">Please enter your credentials</p>
        </div>
        
        <div className="space-y-6">
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-300 mb-2">
              Username
            </label>
            <input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg focus:border-red-500 focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 text-white placeholder-gray-500 transition-all duration-200"
              placeholder="Enter your username"
              required
            />
          </div>
          
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-2">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg focus:border-red-500 focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 text-white placeholder-gray-500 transition-all duration-200"
              placeholder="Enter your password"
              required
            />
          </div>
          
          <div className="flex items-center justify-between">
            <label className="flex items-center">
              <input
                type="checkbox"
                className="w-4 h-4 bg-black border border-gray-700 rounded focus:ring-red-500 focus:ring-2 accent-red-500"
              />
              <span className="ml-2 text-sm text-gray-300">Remember me</span>
            </label>
            
            <a href="#" className="text-sm text-red-500 hover:text-red-400 transition-colors duration-200">
              Forgot password?
            </a>
          </div>
          
          <button
            onClick={handleSubmit}
            className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-200 transform hover:scale-[1.02] focus:ring-4 focus:ring-red-500 focus:ring-opacity-50"
          >
            Sign In
          </button>
        </div>
        
        <div className="mt-6 text-center">
          <p className="text-gray-400 text-sm">
            Don't have an account?{' '}
            <a href={REGISTER_ROUTE} className="text-red-500 hover:text-red-400 transition-colors duration-200">
              Sign up here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}