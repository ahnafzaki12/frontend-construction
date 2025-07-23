import React, { useState } from 'react'
import { Phone, Mail, MapPin, Clock, ArrowRight, CheckCircle } from "lucide-react"

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1541976590-713941681591?w=1200')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-transparent to-transparent"></div>

        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-sky-500/20 backdrop-blur-sm border border-sky-400/30 text-sky-300 px-4 py-2 rounded-full mb-6">
            <div className="w-2 h-2 bg-sky-400 rounded-full animate-pulse"></div>
            <span className="text-sm font-semibold tracking-wider uppercase">Quality. Integrity. Value.</span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Contact{" "}
            <span className="bg-gradient-to-r from-sky-400 via-blue-400 to-sky-500 bg-clip-text text-transparent">
              Us
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-slate-100 max-w-2xl mx-auto leading-relaxed">
            We excel at transforming visions into reality through outstanding craftsmanship and precise attention to detail.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-sky-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 bg-sky-500/10 backdrop-blur-sm border border-sky-400/20 text-sky-700 px-4 py-2 rounded-full mb-6">
              <div className="w-2 h-2 bg-sky-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-semibold tracking-wider uppercase">Get In Touch</span>
            </div>

            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6 leading-tight">
              Let's Build{" "}
              <span className="bg-gradient-to-r from-sky-500 via-blue-500 to-sky-600 bg-clip-text text-transparent">
                Together
              </span>
            </h2>

            <p className="text-lg text-slate-600 leading-relaxed">
              Ready to start your construction project? Get in touch with our expert team for a consultation and free estimate.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-1 space-y-8">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200/50">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="group cursor-pointer">
                    <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-sky-50 transition-all duration-300">
                      <div className="bg-sky-100 p-3 rounded-lg group-hover:bg-sky-200 transition-colors">
                        <Phone className="w-6 h-6 text-sky-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-900 mb-1">Call Us</h4>
                        <a href="tel:888-000-0000" className="text-sky-600 hover:text-sky-700 font-medium">
                          (888) 000-0000
                        </a>
                        <p className="text-sm text-slate-500 mt-1">Mon-Fri 8:00 AM - 6:00 PM</p>
                      </div>
                    </div>
                  </div>

                  <div className="group cursor-pointer">
                    <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-sky-50 transition-all duration-300">
                      <div className="bg-sky-100 p-3 rounded-lg group-hover:bg-sky-200 transition-colors">
                        <Mail className="w-6 h-6 text-sky-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-900 mb-1">Email Us</h4>
                        <a href="mailto:contact@example.com" className="text-sky-600 hover:text-sky-700 font-medium">
                          contact@example.com
                        </a>
                        <p className="text-sm text-slate-500 mt-1">We'll respond within 24 hours</p>
                      </div>
                    </div>
                  </div>

                  <div className="group cursor-pointer">
                    <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-sky-50 transition-all duration-300">
                      <div className="bg-sky-100 p-3 rounded-lg group-hover:bg-sky-200 transition-colors">
                        <MapPin className="w-6 h-6 text-sky-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-900 mb-1">Visit Us</h4>
                        <address className="text-slate-600 not-italic">
                          123 Construction Ave<br />
                          Building City, BC 12345
                        </address>
                      </div>
                    </div>
                  </div>

                  <div className="group cursor-pointer">
                    <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-sky-50 transition-all duration-300">
                      <div className="bg-sky-100 p-3 rounded-lg group-hover:bg-sky-200 transition-colors">
                        <Clock className="w-6 h-6 text-sky-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-900 mb-1">Business Hours</h4>
                        <div className="text-slate-600 space-y-1">
                          <p>Mon - Fri: 8:00 AM - 6:00 PM</p>
                          <p>Saturday: 9:00 AM - 4:00 PM</p>
                          <p>Sunday: Closed</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200/50">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Send Us a Message</h3>
                
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all duration-300 placeholder-slate-400"
                        placeholder="John Doe"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all duration-300 placeholder-slate-400"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-slate-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all duration-300 placeholder-slate-400"
                        placeholder="(555) 123-4567"
                      />
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-semibold text-slate-700 mb-2">
                        Subject *
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all duration-300 placeholder-slate-400"
                        placeholder="Project Consultation"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all duration-300 placeholder-slate-400 resize-none"
                      placeholder="Tell us about your project..."
                    ></textarea>
                  </div>

                  <div className="flex items-center justify-between pt-4">
                    <p className="text-sm text-slate-500">
                      * Required fields
                    </p>
                    
                    <button
                      type="button"
                      onClick={handleSubmit}
                      disabled={isSubmitted}
                      className="inline-flex items-center gap-2 bg-gradient-to-r from-sky-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-sky-600 hover:to-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitted ? (
                        <>
                          <CheckCircle className="w-5 h-5" />
                          Message Sent!
                        </>
                      ) : (
                        <>
                          Send Message
                          <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="mt-16">
            <div className="bg-gradient-to-r from-sky-500 to-blue-600 rounded-2xl p-8 md:p-12 text-white text-center">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to Start Your Project?</h3>
              <p className="text-sky-100 mb-8 max-w-2xl mx-auto">
                Get a free consultation and estimate for your construction project. Our expert team is ready to bring your vision to life.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="tel:888-000-0000"
                  className="inline-flex items-center gap-2 bg-white text-sky-600 px-6 py-3 rounded-lg font-semibold hover:bg-sky-50 transition-all duration-300"
                >
                  <Phone className="w-5 h-5" />
                  Call Now
                </a>
                <span className="text-sky-200 hidden sm:block">or</span>
                <button className="border-2 border-white text-white hover:bg-white hover:text-sky-600 px-6 py-3 rounded-lg font-semibold transition-all duration-300">
                  Schedule Consultation
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ContactUs