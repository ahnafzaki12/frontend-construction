import { ArrowRight, Calendar, User, Clock, Tag } from "lucide-react"
import { useEffect, useState } from "react";
import { apiUrl } from "./http";

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  async function fetchLatestPosts() {
    try {
      setLoading(true);
      const res = await fetch(apiUrl + 'get-latest-posts?limit=3', {
        method: "GET",
      });
      
      if (!res.ok) {
        throw new Error('Failed to fetch posts');
      }
      
      const result = await res.json();
      setPosts(result);
      setError(null);
    } catch (err) {
      setError(err.message);
      console.error('Error fetching posts:', err);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchLatestPosts();
  }, []);

  // Format tanggal dari created_at
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('id-ID', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  // Hitung estimasi waktu baca (asumsi 200 kata per menit)
  const calculateReadTime = (excerpt) => {
    const words = excerpt.split(' ').length;
    const minutes = Math.ceil(words / 200);
    return `${minutes} min read`;
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-sky-50/30" id="blog">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-sky-500/10 backdrop-blur-sm border border-sky-400/20 text-sky-700 px-4 py-2 rounded-full mb-6">
            <div className="w-2 h-2 bg-sky-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-semibold tracking-wider uppercase">Blog & News</span>
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6 leading-tight">
            Articles &{" "}
            <span className="bg-gradient-to-r from-sky-500 via-blue-500 to-sky-600 bg-clip-text text-transparent">
              blog posts
            </span>
          </h2>

          <p className="text-lg text-slate-600 leading-relaxed">
            We specialize in a wide range of construction service, including residential, commercial, and industrial projects.
          </p>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-sky-600"></div>
            <p className="mt-4 text-slate-600">Loading posts...</p>
          </div>
        )}

        {/* Error State */}
        {error && (
          <div className="text-center py-12">
            <div className="bg-red-50 border border-red-200 rounded-lg p-6 max-w-md mx-auto">
              <p className="text-red-600 font-semibold mb-2">Failed to load posts</p>
              <p className="text-red-500 text-sm">{error}</p>
              <button 
                onClick={fetchLatestPosts}
                className="mt-4 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors"
              >
                Try Again
              </button>
            </div>
          </div>
        )}

        {/* Posts Grid */}
        {!loading && !error && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article
                key={post.id}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-slate-200/50 hover:border-sky-200"
              >
                {/* Post Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={`http://localhost:8000/${post.image}`}
                    alt={post.title}
                    className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
                    onError={(e) => {
                      e.target.src = 'https://via.placeholder.com/400x300?text=No+Image';
                    }}
                  />
                  <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm">
                    <div className="flex items-center gap-1">
                      <Tag className="w-3 h-3" />
                      {post.category}
                    </div>
                  </div>
                </div>

                {/* Post Content */}
                <div className="p-6 space-y-4">
                  {/* Meta Info */}
                  <div className="flex items-center justify-between text-slate-500 text-sm">
                    <div className="flex items-center gap-1">
                      <User className="w-3 h-3" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      <span>{calculateReadTime(post.excerpt)}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-1 text-slate-500 text-sm">
                    <Calendar className="w-3 h-3" />
                    <span>{formatDate(post.created_at)}</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-sky-600 transition-colors line-clamp-2">
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-slate-600 leading-relaxed text-sm line-clamp-3">
                    {post.excerpt}
                  </p>

                  {/* Read More Link */}
                  <div className="pt-2">
                    <a
                      href={`#post-${post.id}`}
                      className="inline-flex items-center gap-2 text-sky-600 hover:text-sky-700 font-semibold text-sm group-hover:gap-3 transition-all duration-300"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}

        {/* Empty State */}
        {!loading && !error && posts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-slate-600 text-lg">No posts available at the moment.</p>
          </div>
        )}

        {/* Bottom CTA Section */}
        {!loading && !error && posts.length > 0 && (
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-sky-500 to-blue-600 rounded-2xl p-8 md:p-12 text-white">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Stay Updated with Our Latest News</h3>
              <p className="text-sky-100 mb-8 max-w-2xl mx-auto">
                Subscribe to our newsletter and never miss out on industry insights, project updates, and construction tips.
              </p>
              <div className="mt-4">
                <button className="border-2 border-white text-white hover:bg-white hover:text-sky-600 px-8 py-3 rounded-xl font-semibold transition-all duration-300">
                  View All Articles
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default Blog