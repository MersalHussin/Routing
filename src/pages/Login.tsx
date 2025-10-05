import React from 'react';

const Login = () => {
    return (
     <div className="min-h-[calc(100vh-92px)] flex items-center justify-center bg-[#23272f] text-gray-100">
      <div className="bg-[#2c313a] shadow-2xl rounded-2xl p-8 w-full max-w-md border border-gray-700">
        <h1 className="text-3xl font-bold text-center text-[#61dafb] mb-4">
          Login
        </h1>
        <p className="text-gray-400 text-center mb-8">
          Welcome back! Please enter your details.
        </p>

        <form className="space-y-6">
          <div>
            <label
              htmlFor="username"
              className="block text-gray-300 font-medium mb-2"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Enter your username"
              className="w-full px-4 py-2 bg-[#1b1e24] border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#61dafb] focus:border-transparent text-gray-100 placeholder-gray-500 transition"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-gray-300 font-medium mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 bg-[#1b1e24] border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#61dafb] focus:border-transparent text-gray-100 placeholder-gray-500 transition"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#61dafb] text-[#0b0c10] py-2 rounded-lg font-semibold hover:bg-[#4fc4e8] transition duration-200"
          >
            Login
          </button>
        </form>

        <p className="text-center text-sm text-gray-500 mt-6">
          Don’t have an account?{" "}
          <a href="#" className="text-[#61dafb] hover:underline">
            Sign up
          </a>
        </p>
      </div>
    </div>
    );
}

export default Login;
