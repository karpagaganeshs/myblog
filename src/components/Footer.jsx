// src/components/Footer.jsx
const Footer = () => {
    return (
      <footer className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 text-white py-12 mt-16 overflow-hidden">
        {/* Decorative floating orbs (subtle, professional, not distracting) */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-blue-400/20 blur-3xl rounded-full animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-indigo-500/20 blur-3xl rounded-full animate-ping"></div>
  
        <div className="relative max-w-6xl mx-auto px-6 md:px-12 z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Left - Branding */}
            <div>
              <h2 className="text-2xl font-bold">Karpaga Ganesh 💌</h2>
              <p className="mt-3 text-sm text-gray-300 max-w-sm">
                Read and Rise ✌️ — Exploring Tech, Business & Entertainment with
                insight and creativity.
              </p>
            </div>
  
            {/* Middle - Navigation */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Explore</h3>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <a href="/" className="hover:text-white hover:pl-1 transition-all">
                    Home
                  </a>
                </li>
                <li>
                  <a href="/all-blogs" className="hover:text-white hover:pl-1 transition-all">
                    All Blogs
                  </a>
                </li>
                <li>
                  <a href="/#about" className="hover:text-white hover:pl-1 transition-all">
                    About Me
                  </a>
                </li>
                <li>
                  <a href="/#contact" className="hover:text-white hover:pl-1 transition-all">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
  
            {/* Right - Social & Email */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Connect</h3>
              <div className="flex gap-4">
                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/karpagaganeshs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-blue-600 transition-all"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className="w-5 h-5"
                    viewBox="0 0 448 512"
                  >
                    <path d="M100.28 448H7.4V148.9h92.88zM53.84 107.3C24.12 107.3 0 83.16 0 53.58 0 24.48 24.12 0 53.84 0s53.84 24.48 53.84 53.58c0 29.58-24.16 53.72-53.84 53.72zM447.9 448h-92.38V302.4c0-34.7-12.48-58.4-43.72-58.4-23.84 0-38 16.06-44.28 31.56-2.28 5.56-2.84 13.28-2.84 21.08V448h-92.36s1.24-270.6 0-298.1h92.36v42.26c12.28-18.94 34.28-45.94 83.34-45.94 60.8 0 106.36 39.7 106.36 125.2V448z" />
                  </svg>
                </a>
  
                {/* Email */}
                <a
                  href="mailto:karpagaganeshsubramanian@gmail.com"
                  className="group relative w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-red-500 transition-all"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className="w-5 h-5"
                    viewBox="0 0 512 512"
                  >
                    <path d="M502.3 190.8L327.4 338c-15.6 13-38.7 13-54.3 0L9.7 190.8C3.9 186.2 0 178.6 0 170.5 0 152.1 14.3 138 32 138h448c17.7 0 32 14.1 32 32.5 0 8.1-3.9 15.7-9.7 20.3zM480 202.5V384c0 17.7-14.3 32-32 32H64c-17.7 0-32-14.3-32-32V202.5l176.4 146.3c30.8 25.6 75.3 25.6 106.2 0L480 202.5z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
  
          {/* Bottom note */}
          <div className="border-t border-white/20 mt-12 pt-6 text-center text-sm text-gray-400">
            © {new Date().getFullYear()} Karpaga Ganesh. All rights reserved.
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  