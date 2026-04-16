import { useState, useEffect } from "react";

const Navbar = () => {

  const [isScrolling, setIsScrolling] = useState(false);
  const [atTop, setAtTop] = useState(true);

  useEffect(() => {
    let timeout;

    const handleScroll = () => {
      const scrollY = window.scrollY;

      setAtTop(scrollY === 0);
      setIsScrolling(true);

      clearTimeout(timeout);
      timeout = setTimeout(() => {
        setIsScrolling(false);
      }, 1500);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`
        w-full bg-white border-b border-gray-200
        fixed top-0 left-0 z-50 transition-all duration-500
        ${
          atTop
            ? "opacity-100"
            : isScrolling
            ? "opacity-100"
            : "opacity-60"
        }
      `}
    >

      <div className="max-w-[1200px] mx-auto px-6 py-3 flex items-center justify-between">

        {/* LEFT GROUP */}
        <div className="flex items-center gap-8">

          <div className="w-[100px] h-[40px] flex items-center">
            <img 
              src="/logo.png" 
              
              className="h-full object-contain"
            />
          </div>

          <div className="flex flex-col items-center text-sm font-medium">
            <span className="text-purple-500">Course</span>
            <div className="w-full h-[2px] bg-purple-500 mt-1 rounded-full"></div>
          </div>

        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-6">
          <button className="text-sm text-gray-700">Login</button>
          <button className="text-sm px-5 py-2 rounded-full text-white bg-gradient-to-r from-purple-600 to-pink-500">
            Register for free
          </button>
        </div>

      </div>

    </div>
  );
};

export default Navbar;