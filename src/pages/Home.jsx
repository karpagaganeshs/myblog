// src/pages/Home.jsx
import GenreCard from "../components/GenreCard";
import { blogs } from "../data/blogs";

const genreOrder = [
  "my-journey",
  "tech",
  "business",
  "startup-stories",
  "social",
  "entertainment",
];

const Home = () => {
  const genreData = genreOrder
    .map((genre) => {
      const genreBlogs = blogs.filter((blog) => blog.genre === genre);
      return genreBlogs.length > 0
        ? { blog: genreBlogs[0], count: genreBlogs.length }
        : null;
    })
    .filter(Boolean);

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-blue-50 via-blue-100 to-white">
      <main className="max-w-5xl mx-auto px-4 py-8 space-y-12">
        {/* Header */}
        <section className="flex flex-col md:flex-row items-center md:items-start gap-8 bg-gradient-to-br from-white/80 to-blue-100/20 rounded-2xl p-6 md:p-10 shadow-lg">
          <img
            src='https://res.cloudinary.com/dmg0m90am/image/upload/v1755887618/your-photo_cpbyp8.jpg'
            alt="Karpaga Ganesh"
            className="w-40 h-40 md:w-48 md:h-48 rounded-full object-cover border-4 border-white shadow-lg"
          />
          <div className="flex flex-col justify-center text-center md:text-left max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-extrabold font-serif text-gray-900 leading-tight mb-2">
              Why Am I writing?
            </h2>
            <p className="text-indigo-800 italic tracking-wide text-base md:text-lg">
              “If someone asks me, how you want to be remembered? <br />
              My genuine answer would be —{" "}
              <strong>I want to be remembered by my words.</strong>”
            </p>
            <div className="mt-4 w-24 h-1 bg-gradient-to-r from-blue-300 to-indigo-900 rounded-full mx-auto md:mx-0 animate-pulse" />
          </div>
        </section>

        {/* Genre Cards */}
        {genreData.map(({ blog, count }, index) => (
          <GenreCard
            key={blog.genre}
            blog={blog}
            reverse={index % 2 !== 0}
            count={count}
          />
        ))}

        {/* About Section */}
        <section
          id="about"
          className="relative pt-16 pb-20 px-6 md:px-12 bg-gradient-to-br from-white via-blue-50 to-blue-100 rounded-3xl shadow-inner overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-32 h-32 bg-blue-200 opacity-30 blur-2xl rounded-full -z-10 animate-ping" />
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-blue-300 opacity-30 blur-2xl rounded-full -z-10 animate-pulse" />

          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-900">
            About <span className="text-blue-600">Me</span>
          </h2>

          <div className="flex flex-col md:flex-row items-center md:items-start gap-10 max-w-4xl mx-auto">
            <div className="relative">
              <img
                src='https://res.cloudinary.com/dmg0m90am/image/upload/v1755887619/about-photo_umssbv.jpg'
                alt="Karpaga Ganesh"
                className="w-36 h-36 md:w-44 md:h-44 rounded-full object-cover border-4 border-white shadow-lg"
              />
              <span className="absolute -bottom-6 right-0 text-white text-xs font-semibold px-2 py-2 rounded-full shadow">
                ❤️
              </span>
            </div>

            <div className="text-gray-800 text-center md:text-left space-y-4 max-w-xl">
              <p className="text-lg leading-relaxed">
                I’m{" "}
                <span className="font-semibold text-blue-600">
                  Karpaga Ganesh
                </span>
                , an inspired writer with an obsession for words and the worlds
                they build. My passion lies in <strong>technology</strong>,{" "}
                <strong>business</strong>, and <strong>storytelling</strong>,
                where I find endless opportunities to express and connect.
              </p>
              <p className="text-base">
                Every sentence I write aims to resonate, to remain — because I
                believe that{" "}
                <span className="text-blue-900 font-medium">
                  words have the power to outlive time
                </span>
                . So this blog reminds me that Iam back in the track with the
                spirit <em>I missed away.</em>.
              </p>
              <blockquote className="italic border-l-4 border-blue-600 pl-4 text-blue-900 bg-blue-100/60 rounded p-3 shadow-md">
                "And those who were seen dancing were thought to be insane by
                those who could not hear the music."
              </blockquote>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          className="relative pt-20 pb-24 px-6 md:px-12 bg-gradient-to-br from-blue-50 via-white to-blue-100 rounded-3xl shadow-xl overflow-hidden"
        >
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-300 opacity-20 blur-3xl rounded-full z-0 animate-pulse" />
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-indigo-400 opacity-30 blur-2xl rounded-full z-0 animate-ping" />

          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-900 relative z-10">
            Let’s <span className="text-blue-600">Connect</span>
          </h2>

          <div className="max-w-3xl mx-auto flex flex-col md:flex-row items-start gap-10 relative z-10 bg-white/80 backdrop-blur-md p-8 rounded-xl shadow-lg">
            {/* Info + Links */}
            <div className="flex-1 space-y-5">
              <h3 className="text-xl font-semibold text-blue-800">
                Reach out to me:
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Whether it’s feedback, collaboration, or just a kind word — I’d
                love to hear from you. Just drop the message!
              </p>
              <a
                href="https://www.linkedin.com/in/karpagaganeshs"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-blue-600 text-white px-5 py-2 rounded-full font-medium shadow hover:bg-blue-700 hover:shadow-lg transition-all mt-4"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path d="M100.28 448H7.4V148.9h92.88zm-46.44-340.7C24.12 107.3 0 83.16 0 53.58 0 24.48 24.12 0 53.84 0s53.84 24.48 53.84 53.58c-.04 29.58-24.16 53.72-53.84 53.72zM447.9 448h-92.38V302.4c0-34.7-12.48-58.4-43.72-58.4-23.84 0-38 16.06-44.28 31.56-2.28 5.56-2.84 13.28-2.84 21.08V448h-92.36s1.24-270.6 0-298.1h92.36v42.26c12.28-18.94 34.28-45.94 83.34-45.94 60.8 0 106.36 39.7 106.36 125.2V448z" />
                </svg>
                Connect on LinkedIn
              </a>
            </div>

            {/* Form */}
            <form
              action="https://formspree.io/f/xvgqergn"
              method="POST"
              className="flex-1 space-y-4"
            >
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
              <textarea
                name="message"
                placeholder="Your Message"
                rows="4"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-medium py-2.5 rounded-md hover:shadow-xl transition-all hover:scale-105"
              >
                Send Message 🚀
              </button>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
