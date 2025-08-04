import { useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { blogs } from "../data/blogs";
import genreImages from "../data/genreImages";
import { getReadingTime } from "../utils/getReadingTime";

const GenrePage = () => {
  const { genreId } = useParams();
  const navigate = useNavigate();

  const genreBlogs = blogs.filter((blog) => blog.genre === genreId);
  const image = genreImages[genreId];

  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("desc");

  const filteredBlogs = useMemo(() => {
    return [...genreBlogs]
      .filter((blog) =>
        blog.title.toLowerCase().includes(searchTerm.toLowerCase())
      )
      .sort((a, b) =>
        sortOrder === "desc"
          ? new Date(b.date) - new Date(a.date)
          : new Date(a.date) - new Date(b.date)
      );
  }, [searchTerm, sortOrder, genreBlogs]);

  return (
    <main className="max-w-6xl mx-auto px-4 py-12 space-y-12">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-white via-blue-50 to-blue-100 p-6 md:p-10 rounded-3xl shadow-md flex flex-col md:flex-row gap-6 items-center overflow-hidden">
        <img
          src={image}
          alt={`${genreId} genre`}
          className="w-full md:w-1/3 h-52 md:h-64 object-cover rounded-2xl shadow-lg"
        />
        <div className="text-center md:text-left space-y-3">
          <h1 className="text-4xl font-extrabold capitalize bg-gradient-to-r from-gray-800 to-blue-700 bg-clip-text text-transparent">
            {genreId.replace("-", " ")} Blogs
          </h1>
          <p className="text-gray-700">
            Dive into all my blog posts related to{" "}
            <strong>{genreId.replace("-", " ")}</strong> — sorted with the
            latest thoughts at the top. Search, explore, and enjoy!
          </p>
        </div>
      </section>

      {/* Search + Sort Controls */}
      <section className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <input
          type="text"
          placeholder="Search blog titles..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full md:w-1/2 px-4 py-2 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
          className="w-full md:w-48 px-4 py-2 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          <option value="desc">Newest First</option>
          <option value="asc">Oldest First</option>
        </select>
      </section>

      {/* Blog Cards List */}
      {/* Blog Cards List */}
<section className="space-y-6">
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

        <p className="mt-3 text-gray-700 leading-relaxed">{blog.summary}</p>
      </div>
    ))
  ) : (
    <p className="text-gray-600 italic text-center">
      No blogs found for this genre.
    </p>
  )}
</section>

    </main>
  );
};

export default GenrePage;
