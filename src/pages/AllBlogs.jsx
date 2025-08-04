import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { blogs } from "../data/blogs";
import { getReadingTime } from "../utils/getReadingTime";

const AllBlogs = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const filteredBlogs = useMemo(() => {
    return [...blogs]
      .filter((blog) =>
        blog.title.toLowerCase().includes(search.toLowerCase())
      )
      .sort((a, b) => new Date(b.date) - new Date(a.date));
  }, [search]);

  return (
    <main className="max-w-6xl mx-auto px-4 py-12 space-y-10">
      {/* Page Title */}
      <h1 className="text-4xl font-bold text-gray-900 border-b border-gray-300 pb-4">
        All Blogs
      </h1>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search blog titles..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full md:w-1/2 px-5 py-3 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
      />

      {/* Blog Cards */}
      <div className="space-y-6">
        {filteredBlogs.length > 0 ? (
          filteredBlogs.map((blog) => (
            <div
              key={blog.id}
              onClick={() => navigate(`/blog/${blog.id}`)}
              className="group cursor-pointer p-6 rounded-2xl border border-black/10 bg-white/60 backdrop-blur-md shadow-lg hover:shadow-2xl transition duration-300 hover:scale-[1.01]"
            >
              <h2 className="text-2xl font-bold text-gray-900 group-hover:text-blue-700 transition">
                {blog.title}
              </h2>

              <p className="text-sm text-gray-600 mt-1">
                {new Date(blog.date).toLocaleDateString(undefined, {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })}{" "}
                •{" "}
                <span className="text-blue-700 font-medium">
                  {blog.genre.replace("-", " ")}
                </span>{" "}
                • {getReadingTime(blog.content)}
              </p>

              <p className="mt-3 text-gray-700 leading-relaxed">
                {blog.summary}
              </p>
            </div>
          ))
        ) : (
          <p className="text-gray-500 italic">No blogs found.</p>
        )}
      </div>
    </main>
  );
};

export default AllBlogs;
