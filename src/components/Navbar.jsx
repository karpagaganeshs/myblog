import { useState } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'All Blogs', path: '/all-blogs' },
  { name: 'My Journey', path: '/genre/my-journey' },
  { name: 'Tech', path: '/genre/tech' },
  { name: 'Business', path: '/genre/business' },
  { name: 'Startup Stories', path: '/genre/startup-stories' },
  { name: 'Social', path: '/genre/social' },
  { name: 'Entertainment', path: '/genre/entertainment' },
]

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  const scrollToSection = (id) => {
    setMenuOpen(false)
    if (location.pathname !== '/') {
      navigate('/')
      setTimeout(() => {
        const el = document.getElementById(id)
        if (el) el.scrollIntoView({ behavior: 'smooth' })
      }, 100)
    } else {
      const el = document.getElementById(id)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div
      id="navbar"
      className="w-full relative z-50"
    >
      {/* Background design bar */}
      <div className="w-full bg-gradient-to-tr from-white/70 via-blue-100 to-blue-200 backdrop-blur-md shadow-md border-b border-black/10">
        <div className="max-w-7xl mx-auto px-4 py-6">
          {/* Header: Name + Logo + Hamburger */}
          <div className="flex justify-between items-center mb-4">
            {/* Left: Name & Slogan */}
            <div>
              <h1 className="text-3xl font-bold font-serif text-black">
                <span className="bg-gradient-to-r from-blue-800 to-blue-400 bg-clip-text text-transparent animate-pulse">
                  Karpaga Ganesh
                </span>
              </h1>
              <p className="text-sm text-gray-600 italic pl-1 mt-1 tracking-wide">
                Read and Rise
              </p>
            </div>

            {/* Right: Logo (desktop only) */}
            <div className="hidden md:block">
              <img
                src="src/assets/logo.png"
                alt="Logo"
                className="w-20 h-20 object-contain"
              />
            </div>

            {/* Hamburger (mobile) */}
            <div className="md:hidden">
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="text-2xl text-black"
                aria-label="Toggle menu"
              >
                {menuOpen ? <FiX /> : <FiMenu />}
              </button>
            </div>
          </div>

          {/* Nav Items */}
          <div
            className={`rounded-2xl border border-black/10 bg-white/70 backdrop-blur-md shadow-lg px-6 py-4 transition-all duration-300 ${
              menuOpen ? 'block' : 'hidden'
            } md:block`}
          >
            <div className="flex flex-col md:flex-row md:flex-wrap md:justify-center gap-3 text-sm font-medium tracking-wide">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    `px-4 py-2 rounded-full transition duration-200 text-center ${
                      isActive
                        ? 'bg-gradient-to-r from-blue-500 to-gray-800 text-white shadow'
                        : 'text-black hover:text-white hover:bg-gradient-to-r from-red-500 to-blue-700'
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              ))}

              <button
                onClick={() => scrollToSection('about')}
                className="px-4 py-2 rounded-full text-black hover:text-white hover:bg-gradient-to-r from-red-500 to-blue-700 transition duration-200"
              >
                About Me
              </button>

              <button
                onClick={() => scrollToSection('contact')}
                className="px-4 py-2 rounded-full text-black hover:text-white hover:bg-gradient-to-r from-red-500 to-blue-700 transition duration-200"
              >
                Contact
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
