// src/pages/BlogDetail.jsx
import { useEffect, useState } from "react";
import {
  FaBriefcase,
  FaFeather,
  FaFilm,
  FaHome,
  FaLaptopCode,
  FaStar,
  FaUsers,
} from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { blogs } from "../data/blogs";
import { getReadingTime } from "../utils/getReadingTime";

const genreLinks = [
  { name: "Home", path: "/", icon: <FaHome /> },
  { name: "My Journey", path: "/genre/my-journey", icon: <FaFeather /> },
  { name: "Tech", path: "/genre/tech", icon: <FaLaptopCode /> },
  { name: "Business", path: "/genre/business", icon: <FaBriefcase /> },
  { name: "Startup Stories", path: "/genre/startup-stories", icon: <FaStar /> },
  { name: "Social", path: "/genre/social", icon: <FaUsers /> },
  { name: "Entertainment", path: "/genre/entertainment", icon: <FaFilm /> },
];
const BlogDetail = () => {
  const { blogId } = useParams();
  const navigate = useNavigate();
  const blog = blogs.find((b) => b.id === blogId);

  const [scrollProgress, setScrollProgress] = useState(0);

  // Hide Navbar
  useEffect(() => {
    const navbar = document.getElementById("navbar");
    if (navbar) navbar.style.display = "none";
    return () => {
      if (navbar) navbar.style.display = "block";
    };
  }, []);

  // Scroll progress bar
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = (scrollTop / docHeight) * 100;
      setScrollProgress(scrolled);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!blog) {
    return <p className="p-10 text-center text-gray-600">Blog not found.</p>;
  }

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-blue-100 to-blue-200">
      {/* Back Button (Mobile Only, Centered) */}
      <div className="md:hidden flex justify-items-start ml-5 ">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center px-5 py-2 mt-4 rounded-full 
               bg-gradient-to-r from-blue-600 to-purple-600 
               text-white font-medium shadow-lg
               hover:shadow-xl hover:scale-105 
               transition-all duration-300"
        >
          ← Back
        </button>
      </div>

      {/* Scroll Progress Bar */}
      <div
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 z-50 transition-all duration-200"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Back to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-6 right-6 bg-black text-white rounded-full p-3 shadow-lg hover:scale-110 transition-transform duration-300 z-40"
        title="Back to top"
      >
        ↑
      </button>

      <div className="flex max-w-screen-xl mx-auto px-4 py-12 gap-8 relative z-10">
        {/* Sidebar */}
        <aside className="w-60 hidden md:block">
          <div className="sticky top-24 bg-white/30 backdrop-blur-lg border border-white/20 shadow-lg rounded-3xl p-6 space-y-4">
            <h2 className="text-lg font-bold text-blue-800 border-b pb-2">
              Explore
            </h2>
            <nav className="space-y-3">
              {genreLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => navigate(link.path)}
                  className="w-full flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-gradient-to-r from-red-500 to-blue-700 hover:text-white rounded-full transition-all"
                >
                  {link.icon}
                  {link.name}
                </button>
              ))}
            </nav>
          </div>
        </aside>

        {/* Main Blog Article */}
        <article className="flex-1 bg-white/50 backdrop-blur-md p-10 rounded-3xl shadow-2xl border border-black/10 space-y-8 font-serif transition-all motion-safe:animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-indigo-900 via-blue-600 to-sky-400 bg-clip-text text-transparent leading-tight transition-all duration-500">
            {blog.title}
          </h1>

          <p className="text-sm text-gray-600 font-sans">
            {new Date(blog.date).toDateString()} •{" "}
            <span className="uppercase tracking-wide font-medium">
              {blog.genre}
            </span>{" "}
            • {getReadingTime(blog.content)}
          </p>
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full max-h-[420px] object-cover rounded-3xl shadow-3xl hover:scale-103 transition-transform duration-300"
          />

          <div className="prose prose-lg max-w-none prose-blue text-gray-800 leading-relaxed space-y-5 transition-all duration-300">
            {blog.content.split("\n\n").map((para, idx) => (
              <p key={idx}>{para}</p>
            ))}
          </div>
        </article>
      </div>

      {/* Background Glow Elements */}
      <div className="fixed top-0 left-0 w-full h-full -z-10 bg-gradient-to-br from-white via-blue-50 to-blue-100" />
      <div className="fixed top-[10%] left-[5%] w-72 h-72 bg-purple-200 rounded-full blur-3xl opacity-30 animate-pulse -z-10" />
      <div className="fixed bottom-[10%] right-[5%] w-72 h-72 bg-sky-300 rounded-full blur-3xl opacity-40 animate-ping -z-10" />
    </div>
  );
};

export default BlogDetail;
