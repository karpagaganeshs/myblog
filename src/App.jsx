import { Route, Routes } from 'react-router-dom'
import Footer from "./components/Footer"
import Navbar from './components/Navbar'
import AllBlogs from './pages/AllBlogs'
import BlogDetail from './pages/BlogDetail'
import GenrePage from './pages/GenrePage'
import Home from './pages/Home'


function App() {
  return (
    <div className="font-serif bg-white bg-opacity-90 text-black min-h-screen">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/all-blogs" element={<AllBlogs />} />
        <Route path="/genre/:genreId" element={<GenrePage />} />
        <Route path="/blog/:blogId" element={<BlogDetail />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
