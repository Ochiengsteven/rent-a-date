import React from 'react';
import { FacebookFilled, GoogleOutlined, AppleFilled } from '@ant-design/icons';

const LoginPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-pink-500 to-purple-600">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8 space-y-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-2">Welcome Back!</h1>
          <p className="text-gray-600">Sign in to continue to your favorite app.</p>
        </div>

        <form className="space-y-6">
          {/* Email Input */}
          <div>
            <label htmlFor="email" className="block text-gray-700 text-sm font-semibold mb-2">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              placeholder="you@example.com"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
              required
            />
          </div>

          {/* Password Input */}
          <div>
            <label htmlFor="password" className="block text-gray-700 text-sm font-semibold mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="••••••••"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
              required
            />
          </div>

          <div className="flex items-center justify-between">
            <a href="/forgot-password" className="text-pink-500 text-sm hover:underline">
              Forgot Password?
            </a>
            <button
              type="submit"
              className="bg-pink-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-500"
            >
              Sign In
            </button>
          </div>
        </form>

        <div className="text-center">
          <p className="text-gray-600 mb-4">Or sign in with</p>
          <div className="flex justify-center space-x-4">
            <button
              className="w-10 h-10 flex items-center justify-center bg-gray-200 rounded-full hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500"
              aria-label="Sign in with Facebook"
            >
              <FacebookFilled className="text-blue-600 text-xl" />
            </button>
            <button
              className="w-10 h-10 flex items-center justify-center bg-gray-200 rounded-full hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500"
              aria-label="Sign in with Google"
            >
              <GoogleOutlined className="text-red-600 text-xl" />
            </button>
            <button
              className="w-10 h-10 flex items-center justify-center bg-gray-200 rounded-full hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500"
              aria-label="Sign in with Apple"
            >
              <AppleFilled className="text-black text-xl" />
            </button>
          </div>
        </div>

        <div className="text-center mt-4">
          <p className="text-gray-600">
            Don't have an account?{' '}
            <a href="/register" className="text-pink-500 hover:underline">
              Sign up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;