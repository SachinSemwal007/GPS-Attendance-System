import React, { useState } from 'react';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login attempt:', formData);
  };

  return (
    <div className="min-h-[60vh] sm:min-h-[70vh] md:min-h-screen flex items-center justify-center bg-gradient-to-br from-[#1f1f1f]/30 to-[#000000] px-3 sm:px-4 md:px-6 lg:px-8">
      <div className="w-full max-w-[280px] xs:max-w-[320px] sm:max-w-sm md:max-w-md lg:w-[400px] xl:w-[420px] min-h-[320px] xs:min-h-[350px] sm:min-h-[380px] lg:min-h-[450px] p-3 xs:p-4 sm:p-6 md:p-8 lg:p-10 rounded-lg xs:rounded-xl sm:rounded-2xl bg-white/5 backdrop-blur-md shadow-2xl border border-white/10 lg:mx-[130px] transition-all duration-300 hover:shadow-3xl hover:bg-white/10">
        
        {/* Header */}
        <h2 className="text-lg xs:text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-3 xs:mb-4 sm:mb-6 lg:mb-10 text-center tracking-wide">
          Sign In
        </h2>

        {/* Form */}
        <div className="space-y-2 xs:space-y-3 sm:space-y-4 lg:space-y-6">
          <div>
            <label htmlFor="email" className="block text-xs xs:text-sm font-medium text-white mb-1 opacity-90">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="you@example.com"
              required
              className="w-full px-2 py-1.5 xs:px-3 xs:py-2 sm:px-4 sm:py-3 rounded-md bg-white/10 text-white placeholder-gray-300 border border-white/20
                         focus:ring-2 focus:ring-amber-400 focus:border-amber-400 outline-none transition-all duration-200 text-xs xs:text-sm sm:text-base
                         hover:bg-white/15 focus:bg-white/15"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-xs xs:text-sm font-medium text-white mb-1 opacity-90">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="••••••••"
              required
              className="w-full px-2 py-1.5 xs:px-3 xs:py-2 sm:px-4 sm:py-3 rounded-md bg-white/10 text-white placeholder-gray-300 border border-white/20
                         focus:ring-2 focus:ring-amber-400 focus:border-amber-400 outline-none transition-all duration-200 text-xs xs:text-sm sm:text-base
                         hover:bg-white/15 focus:bg-white/15"
            />
          </div>

          <div className="pt-1 xs:pt-2 sm:pt-3">
            <button
              type="submit"
              onClick={handleSubmit}
              className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-semibold py-2 xs:py-2.5 sm:py-3 rounded-md shadow-lg transition-all duration-200 active:bg-amber-700 text-xs xs:text-sm sm:text-base transform hover:scale-[1.02] active:scale-[0.98]"
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;