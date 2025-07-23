import React from 'react'
import { ArrowRight, Calendar, User, Clock, Tag } from "lucide-react"
import blogImg from "../../assets/images/construction3.jpg"

const Blog = () => {
  const blogPosts = [
    {
      title: "Top 10 Construction Trends to Watch in 2024",
      excerpt: "Discover the latest innovations and technologies shaping the future of construction industry, from sustainable building practices to AI integration.",
      author: "John Smith",
      date: "March 15, 2024",
      readTime: "5 min read",
      category: "Industry Trends",
      image: blogImg,
      featured: true
    },
    {
      title: "Sustainable Building Materials: A Complete Guide",
      excerpt: "Learn about eco-friendly construction materials that reduce environmental impact while maintaining durability and cost-effectiveness.",
      author: "Sarah Johnson",
      date: "March 10, 2024",
      readTime: "8 min read",
      category: "Sustainability",
      image: blogImg,
      featured: false
    },
    {
      title: "Project Management Best Practices for Construction",
      excerpt: "Essential strategies and tools for managing construction projects efficiently, ensuring timely delivery and budget compliance.",
      author: "Mike Davis",
      date: "March 5, 2024",
      readTime: "6 min read",
      category: "Management",
      image: blogImg,
      featured: false
    },
    {
      title: "Safety Innovations in Modern Construction Sites",
      excerpt: "Explore cutting-edge safety technologies and protocols that are revolutionizing worker protection in construction environments.",
      author: "Lisa Chen",
      date: "February 28, 2024",
      readTime: "7 min read",
      category: "Safety",
      image: blogImg,
      featured: false
    },
  ]

  const featuredPost = blogPosts.find(post => post.featured)
  const regularPosts = blogPosts.filter(post => !post.featured)

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

        {/* Featured Post */}
        {featuredPost && (
          <div className="mb-16">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-200/50 hover:shadow-2xl transition-all duration-500 group">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                {/* Featured Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-64 lg:h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 bg-sky-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Featured
                  </div>
                  <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm">
                    {featuredPost.category}
                  </div>
                </div>

                {/* Featured Content */}
                <div className="p-8 lg:p-10 flex flex-col justify-center">
                  <div className="flex items-center gap-4 text-slate-500 text-sm mb-4">
                    <div className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      <span>{featuredPost.author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{featuredPost.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{featuredPost.readTime}</span>
                    </div>
                  </div>

                  <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-4 group-hover:text-sky-600 transition-colors">
                    {featuredPost.title}
                  </h3>

                  <p className="text-slate-600 leading-relaxed mb-6 text-lg">
                    {featuredPost.excerpt}
                  </p>

                  <a
                    href="#"
                    className="inline-flex items-center gap-2 text-sky-600 hover:text-sky-700 font-semibold group-hover:gap-3 transition-all duration-300"
                  >
                    Read Full Article
                    <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Regular Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regularPosts.map((post, index) => (
            <article
              key={index}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-slate-200/50 hover:border-sky-200"
            >
              {/* Post Image */}
              <div className="relative overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
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
                    <span>{post.readTime}</span>
                  </div>
                </div>

                <div className="flex items-center gap-1 text-slate-500 text-sm">
                  <Calendar className="w-3 h-3" />
                  <span>{post.date}</span>
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
                    href="#"
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

        {/* Bottom CTA Section */}
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
      </div>
    </section>
  )
}

export default Blog