'use client';
import { LOGIN_ROUTE } from '@/constants/routes';
import { useState } from 'react';

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    username: '',
    password: '',
    confirmPassword: ''
  });
  const [agreeTerms, setAgreeTerms] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    if (!agreeTerms) {
      alert('Please agree to the terms and conditions');
      return;
    }
    console.log('Register attempt:', formData);
    // Handle registration logic here
  };

  return (
    <div className="w-200  flex items-center justify-center px-4">
      <div className="bg-gray-900 p-8 rounded-lg shadow-2xl w-full max-w-md border border-red-600">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-red-500 mb-2">Create Account</h1>
          <p className="text-gray-300">Join us today</p>
        </div>
        
        <div className="space-y-6">
          <div>
            <label htmlFor="fullName" className="block text-sm font-medium text-gray-300 mb-2">
              Full Name
            </label>
            <input
              id="fullName"
              name="fullName"
              type="text"
              value={formData.fullName}
              onChange={handleInputChange}
              className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg focus:border-red-500 focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 text-white placeholder-gray-500 transition-all duration-200"
              placeholder="Enter your full name"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
              Email Address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg focus:border-red-500 focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 text-white placeholder-gray-500 transition-all duration-200"
              placeholder="Enter your email"
              required
            />
          </div>
          
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-300 mb-2">
              Username
            </label>
            <input
              id="username"
              name="username"
              type="text"
              value={formData.username}
              onChange={handleInputChange}
              className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg focus:border-red-500 focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 text-white placeholder-gray-500 transition-all duration-200"
              placeholder="Choose a username"
              required
            />
          </div>
          
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-2">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleInputChange}
              className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg focus:border-red-500 focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 text-white placeholder-gray-500 transition-all duration-200"
              placeholder="Create a password"
              required
            />
          </div>

          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-300 mb-2">
              Confirm Password
            </label>
            <input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              value={formData.confirmPassword}
              onChange={handleInputChange}
              className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg focus:border-red-500 focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 text-white placeholder-gray-500 transition-all duration-200"
              placeholder="Confirm your password"
              required
            />
          </div>
          
          <div className="flex items-start">
            <input
              type="checkbox"
              checked={agreeTerms}
              onChange={(e) => setAgreeTerms(e.target.checked)}
              className="w-4 h-4 mt-1 bg-black border border-gray-700 rounded focus:ring-red-500 focus:ring-2 accent-red-500"
            />
            <label className="ml-2 text-sm text-gray-300">
              I agree to the{' '}
              <a href="#" className="text-red-500 hover:text-red-400 transition-colors duration-200">
                Terms of Service
              </a>
              {' '}and{' '}
              <a href="#" className="text-red-500 hover:text-red-400 transition-colors duration-200">
                Privacy Policy
              </a>
            </label>
          </div>
          
          <button
            onClick={handleSubmit}
            className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-200 transform hover:scale-[1.02] focus:ring-4 focus:ring-red-500 focus:ring-opacity-50"
          >
            Create Account
          </button>
        </div>
        
        <div className="mt-6 text-center">
          <p className="text-gray-400 text-sm">
            Already have an account?{' '}
            <a href={LOGIN_ROUTE} className="text-red-500 hover:text-red-400 transition-colors duration-200">
              Sign in here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}