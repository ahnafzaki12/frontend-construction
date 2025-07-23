"use client"
import { useState } from "react"
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react"
import avatarImg from "../../assets/images/author-2.jpg"

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      position: "Property Developer",
      company: "Johnson Developments",
      image: avatarImg,
      rating: 5,
      text: "Amazing Constructions exceeded our expectations in every way. Their attention to detail and commitment to quality is unmatched. The commercial complex they built for us was completed on time and within budget.",
      project: "Commercial Complex - Downtown",
    },
    {
      id: 2,
      name: "Michael Chen",
      position: "CEO",
      company: "TechStart Inc.",
      image: avatarImg,
      rating: 5,
      text: "Working with Amazing Constructions was a game-changer for our company. They transformed our vision into reality with their innovative approach and professional execution. Highly recommended!",
      project: "Corporate Headquarters",
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      position: "Homeowner",
      company: "Private Client",
      image: avatarImg,
      rating: 5,
      text: "Our dream home became a reality thanks to Amazing Constructions. From the initial consultation to the final walkthrough, their team was professional, communicative, and delivered exceptional quality.",
      project: "Custom Residential Home",
    },
    {
      id: 4,
      name: "David Thompson",
      position: "Facilities Manager",
      company: "Manufacturing Corp",
      image: avatarImg,
      rating: 5,
      text: "The industrial facility they constructed for us has been operating flawlessly for over two years. Their expertise in industrial construction and attention to safety protocols is impressive.",
      project: "Industrial Manufacturing Plant",
    },
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const goToSlide = (index) => {
    setCurrentSlide(index)
  }

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-sky-50/30" id="testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-sky-500/10 backdrop-blur-sm border border-sky-400/20 text-sky-700 px-4 py-2 rounded-full mb-6">
            <div className="w-2 h-2 bg-sky-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-semibold tracking-wider uppercase">Testimonials</span>
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6 leading-tight">
            What people are{" "}
            <span className="bg-gradient-to-r from-sky-500 via-blue-500 to-sky-600 bg-clip-text text-transparent">
              saying about us
            </span>
          </h2>

          <p className="text-lg text-slate-600 leading-relaxed">
            We offer a diverse array of construction services, spanning residential, commercial, and industrial projects
            with unmatched expertise and quality.
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative">
          {/* Main Testimonial Card */}
          <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 border border-slate-200/50 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-sky-400/5 to-blue-500/5 rounded-full -translate-y-32 translate-x-32"></div>

            {/* Quote icon */}
            <div className="absolute top-8 right-8 w-16 h-16 bg-gradient-to-r from-sky-500 to-blue-500 rounded-full flex items-center justify-center opacity-10">
              <Quote className="w-8 h-8" />
            </div>

            <div className="relative z-10">
              {/* Stars Rating */}
              <div className="flex items-center gap-1 mb-6">
                {[...Array(testimonials[currentSlide].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-xl md:text-2xl text-slate-700 leading-relaxed mb-8 font-light">
                "{testimonials[currentSlide].text}"
              </blockquote>

              {/* Project Info */}
              <div className="bg-sky-50/50 rounded-lg p-4 mb-8">
                <p className="text-sm text-sky-700 font-semibold">Project: {testimonials[currentSlide].project}</p>
              </div>

              {/* Author Info */}
              <div className="flex items-center gap-4">
                <div className="relative">
                  <img
                    src={testimonials[currentSlide].image || "/placeholder.svg"}
                    alt={testimonials[currentSlide].name}
                    width={64}
                    height={64}
                    className="rounded-full object-cover border-4 border-sky-100"
                  />
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-gradient-to-r from-sky-500 to-blue-500 rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-lg">{testimonials[currentSlide].name}</h4>
                  <p className="text-slate-600">
                    {testimonials[currentSlide].position} at {testimonials[currentSlide].company}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white hover:bg-sky-50 rounded-full shadow-lg border border-slate-200 flex items-center justify-center transition-all duration-300 hover:scale-110 group"
          >
            <ChevronLeft className="w-6 h-6 text-slate-600 group-hover:text-sky-600" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white hover:bg-sky-50 rounded-full shadow-lg border border-slate-200 flex items-center justify-center transition-all duration-300 hover:scale-110 group"
          >
            <ChevronRight className="w-6 h-6 text-slate-600 group-hover:text-sky-600" />
          </button>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-3 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? "bg-gradient-to-r from-sky-500 to-blue-500 w-8"
                  : "bg-slate-300 hover:bg-slate-400"
              }`}
            />
          ))}
        </div>

        {/* All Testimonials Preview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              onClick={() => goToSlide(index)}
              className={`cursor-pointer p-6 rounded-xl border-2 transition-all duration-300 ${
                index === currentSlide
                  ? "border-sky-500 bg-sky-50/50 shadow-lg"
                  : "border-slate-200 bg-white hover:border-sky-300 hover:shadow-md"
              }`}
            >
              <div className="flex items-center gap-3 mb-3">
                <img
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  width={40}
                  height={40}
                  className="rounded-full object-cover"
                />
                <div>
                  <h5 className="font-semibold text-slate-900 text-sm">{testimonial.name}</h5>
                  <p className="text-xs text-slate-600">{testimonial.position}</p>
                </div>
              </div>
              <div className="flex items-center gap-1 mb-2">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-sm text-slate-600 line-clamp-3">{testimonial.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
