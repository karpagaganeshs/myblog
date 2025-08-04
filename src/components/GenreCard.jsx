import { useNavigate } from 'react-router-dom'
import genreImages from '../data/genreImages'

const GenreCard = ({ blog, reverse, count }) => {
  const navigate = useNavigate()
  const image = genreImages[blog.genre]

  return (
    <div
      className={`
        relative flex flex-col md:flex-row ${reverse ? 'md:flex-row-reverse' : ''}
        gap-6 group cursor-pointer p-6 md:p-8 rounded-3xl border border-black/10
        bg-white/50 backdrop-blur-md shadow-xl hover:shadow-2xl transition duration-300
        hover:scale-[1.01] overflow-hidden
      `}
      onClick={() => navigate(`/genre/${blog.genre}`)}
    >
      {/* Background flair on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition duration-500" />

      {/* Image Section */}
      <img
        src={image}
        alt={`${blog.genre} genre`}
        className="w-full md:w-1/2 h-64 object-cover rounded-xl shadow-md group-hover:shadow-xl transition duration-300"
      />

      {/* Text Section */}
      <div
        className={`
          flex-1 flex flex-col justify-center z-10
          ${reverse ? 'items-start text-left' : 'items-end text-right'}
        `}
      >
        <h2 className="text-3xl md:text-4xl font-extrabold capitalize tracking-wide bg-gradient-to-r from-gray-800 to-blue-600 bg-clip-text text-transparent">
          {blog.genre.replace('-', ' ')}
        </h2>

        <p className="mt-4 text-gray-700 text-sm md:text-base leading-relaxed max-w-prose">
          {blog.summary}
        </p>

        {/* Button + Post Count */}
        <div className="mt-6 flex items-center gap-4">
          <button
            className="bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-gray-900 text-white px-6 py-2 rounded-full shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            onClick={(e) => {
              e.stopPropagation()
              navigate(`/genre/${blog.genre}`)
            }}
          >
            Explore {blog.genre.replace('-', ' ')}
          </button>

          <span className="text-sm text-blue-700 font-medium bg-blue-100 px-3 py-1 rounded-full shadow">
            {count} {count === 1 ? 'blog' : 'blogs'}
          </span>
        </div>
      </div>
    </div>
  )
}

export default GenreCard
