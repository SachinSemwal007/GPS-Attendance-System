// import React, { useState } from 'react';

// const Login = () => {
//   const [formData, setFormData] = useState({
//     email: '',
//     password: ''
//   });

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.id]: e.target.value
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Login attempt:', formData);
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#1f1f1f]/30 to-[#000000] px-44">
//       <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-md shadow-2xl border border-white/10">
        
//         {/* Header */}
//         <h2 className="text-3xl font-bold text-white mb-8 text-center tracking-wide">
//           Sign In
//         </h2>

//         {/* Form */}
//         <form className="space-y-6" onSubmit={handleSubmit}>
//           <div>
//             <label htmlFor="email" className="block text-sm font-medium text-white mb-1">
//               Email
//             </label>
//             <input
//               id="email"
//               type="email"
//               value={formData.email}
//               onChange={handleChange}
//               placeholder="you@example.com"
//               required
//               className="w-full px-4 py-2 rounded-md bg-white/10 text-white placeholder-gray-300 border border-white/20
//                          focus:ring-2 focus:ring-amber-400 focus:border-amber-400 outline-none transition"
//             />
//           </div>

//           <div>
//             <label htmlFor="password" className="block text-sm font-medium text-white mb-1">
//               Password
//             </label>
//             <input
//               id="password"
//               type="password"
//               value={formData.password}
//               onChange={handleChange}
//               placeholder="••••••••"
//               required
//               className="w-full px-4 py-2 rounded-md bg-white/10 text-white placeholder-gray-300 border border-white/20
//                          focus:ring-2 focus:ring-amber-400 focus:border-amber-400 outline-none transition"
//             />
//           </div>

//           <button
//             type="submit"
//             className="w-full bg-amber-500 hover:bg-amber-600 text-white font-semibold py-2 rounded-md shadow-lg transition active:bg-amber-700"
//           >
//             Login
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Login;


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
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#1f1f1f]/30 to-[#000000] px-6 ">
      <div className="w-[400px] min-h-[450px] p-10 rounded-2xl bg-white/5 backdrop-blur-md shadow-2xl border border-white/10 mx-[130px]">
        
        {/* Header */}
        <h2 className="text-3xl font-bold text-white mb-10 text-center tracking-wide">
          Sign In
        </h2>

        {/* Form */}
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-white mb-1">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="you@example.com"
              required
              className="w-full px-4 py-3 rounded-md bg-white/10 text-white placeholder-gray-300 border border-white/20
                         focus:ring-2 focus:ring-amber-400 focus:border-amber-400 outline-none transition"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-white mb-1">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="••••••••"
              required
              className="w-full px-4 py-3 rounded-md bg-white/10 text-white placeholder-gray-300 border border-white/20
                         focus:ring-2 focus:ring-amber-400 focus:border-amber-400 outline-none transition"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-amber-500 hover:bg-amber-600 text-white font-semibold py-3 rounded-md shadow-lg transition active:bg-amber-700"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
