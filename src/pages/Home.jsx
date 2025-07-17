import bg from "../assets/bg2.jpg"
import Login from "../components/Login";
const Home = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div 
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('${bg}')`
          }}
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Desktop Layout */}
      <div className="relative z-20   h-screen">
        <div className="flex h-full">
          {/* Left Side - Hero Content */}
          <div className="flex-1 flex flex-col justify-center items-start px-8 xl:px-16">
            <div className="max-w-lg">
              <h1 className="text-white text-4xl xl:text-5xl 2xl:text-6xl font-bold mb-6" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>
                Welcome Back
              </h1>
              <p className="text-white text-lg xl:text-xl leading-relaxed" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.5)' }}>
                Sign in to access your account and continue your journey with us. Experience seamless access to all your favorite features.
              </p>
            </div>
          </div>

          {/* Right Side - Login Form */}
          <div className="flex items-center justify-end ">
            <div className="w-full max-w-2xl">
              <Login/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
