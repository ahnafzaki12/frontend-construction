import Navbar from "../common/Navbar"
import Footer from "../common/Footer"
import { Linkedin, Mail, Phone } from "lucide-react"
import memberImg from "../../assets/images/team1.jpg"
import heroBg from '../../assets/images/hero.jpg';
import AboutImg from "../../assets/images/about-us.jpg"

const AboutUs = () => {
  const teamMembers = [
    {
      name: "John Anderson",
      position: "Project Manager",
      image: memberImg,
      bio: "With over 15 years of experience in construction management, John ensures every project is delivered on time and within budget.",
      email: "john@amazingconstructions.com",
      phone: "+1 (555) 123-4567",
      linkedin: "#",
    },
    {
      name: "Sarah Mitchell",
      position: "Lead Architect",
      image: memberImg,
      bio: "Sarah brings innovative design solutions and sustainable building practices to every project with her 12 years of architectural expertise.",
      email: "sarah@amazingconstructions.com",
      phone: "+1 (555) 123-4568",
      linkedin: "#",
    },
    {
      name: "Michael Rodriguez",
      position: "Construction Supervisor",
      image: memberImg,
      bio: "Michael oversees on-site operations with 18 years of hands-on construction experience, ensuring quality and safety standards.",
      email: "michael@amazingconstructions.com",
      phone: "+1 (555) 123-4569",
      linkedin: "#",
    },
    {
      name: "Emily Chen",
      position: "Structural Engineer",
      image: memberImg,
      bio: "Emily specializes in structural design and analysis, bringing 10 years of engineering excellence to complex construction projects.",
      email: "emily@amazingconstructions.com",
      phone: "+1 (555) 123-4570",
      linkedin: "#",
    },
  ]

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-start overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroBg} alt="Construction site with cranes" fill className="object-cover" priority />
        </div>

        <div className="relative z-10 text-left px-4 sm:px-6 lg:px-8 max-w-4xl ml-34">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-200 mb-6 leading-tight">
            About Us
          </h1>

          <p className="text-xl font-semibold md:text-2xl text-gray-200 max-w-2xl mx-auto leading-relaxed">
            We excel at transforming visions into reality through outstanding craftsmanship and precise attention to
            detail.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white" id="about">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image Section */}
            <div className="relative">
              <img
                src={AboutImg}
                alt="Construction workers building modern structure"
                className="w-full h-[400px] object-cover rounded-lg shadow-lg"
              />

              {/* Simple stats overlay */}
              <div className="absolute bottom-6 left-6 bg-white rounded-lg p-4 shadow-lg">
                <p className="text-2xl font-bold text-gray-900">25+</p>
                <p className="text-sm text-gray-600">Years Experience</p>
              </div>
            </div>

            {/* Content Section */}
            <div className="space-y-8">
              {/* Simple badge */}
              <div className="inline-block">
                <span className="text-slate-600 text-xl font-medium uppercase tracking-wider">About Us</span>
              </div>

              {/* Main heading */}
              <h2 className="text-4xl font-bold text-gray-900 leading-tight">
                Crafting structures that{" "}
                <span className="text-blue-600">last a lifetime</span>
              </h2>

              {/* Description */}
              <p className="text-lg text-gray-600 leading-relaxed">
                Building enduring structures requires a comprehensive approach that combines advanced materials, resilient
                design, routine maintenance, and sustainable practices. By drawing on historical insights and utilizing
                modern technology, we create buildings that stand the test of time.
              </p>

              {/* Simplified features */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700">Quality materials from trusted suppliers</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700">Expert team with decades of experience</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700">Projects completed on schedule</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700">Dedicated to exceeding expectations</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50" id="team">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 bg-sky-500/10 backdrop-blur-sm border border-sky-400/20 text-sky-700 px-4 py-2 rounded-full mb-6">
              <div className="w-2 h-2 bg-sky-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-semibold tracking-wider uppercase">Team</span>
            </div>

            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6 leading-tight">
              Our{" "}
              <span className="bg-gradient-to-r from-sky-500 via-blue-500 to-sky-600 bg-clip-text text-transparent">
                Team
              </span>
            </h2>

            <p className="text-lg text-slate-600 leading-relaxed">
              We specialize in a wide range of construction services, including residential, commercial, and industrial
              projects. Meet the experts who make it all possible.
            </p>
          </div>

          {/* Team Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-slate-200/50 hover:border-sky-200"
              >
                {/* Member Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    width={300}
                    height={400}
                    className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  {/* Social Links Overlay */}
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-3 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
                    <a
                      href={`mailto:${member.email}`}
                      className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-lg flex items-center justify-center hover:bg-sky-500 hover:text-white transition-colors"
                    >
                      <Mail className="w-5 h-5" />
                    </a>
                    <a
                      href={`tel:${member.phone}`}
                      className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-lg flex items-center justify-center hover:bg-sky-500 hover:text-white transition-colors"
                    >
                      <Phone className="w-5 h-5" />
                    </a>
                    <a
                      href={member.linkedin}
                      className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-lg flex items-center justify-center hover:bg-sky-500 hover:text-white transition-colors"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                  </div>
                </div>

                {/* Member Info */}
                <div className="p-6 space-y-4">
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-slate-900 mb-1 group-hover:text-sky-600 transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-sky-600 font-semibold text-sm uppercase tracking-wider">{member.position}</p>
                  </div>

                  <p className="text-slate-600 text-sm leading-relaxed text-center">{member.bio}</p>

                  {/* Contact Info */}
                  <div className="pt-4 border-t border-slate-100 space-y-2">
                    <div className="flex items-center gap-2 text-sm text-slate-600">
                      <Mail className="w-4 h-4 text-sky-500" />
                      <a href={`mailto:${member.email}`} className="hover:text-sky-600 transition-colors">
                        {member.email}
                      </a>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-600">
                      <Phone className="w-4 h-4 text-sky-500" />
                      <a href={`tel:${member.phone}`} className="hover:text-sky-600 transition-colors">
                        {member.phone}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Join Our Team CTA */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-sky-500 to-blue-600 rounded-2xl p-8 md:p-12 text-white">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Join Our Growing Team</h3>
              <p className="text-sky-100 mb-8 max-w-2xl mx-auto">
                We're always looking for talented professionals who share our passion for excellence in construction.
                Explore career opportunities with Amazing Constructions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-sky-600 hover:bg-sky-50 px-8 py-3 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 shadow-lg">
                  View Open Positions
                </button>
                <button className="border-2 border-white text-white hover:bg-white hover:text-sky-600 px-8 py-3 rounded-xl font-semibold transition-all duration-300">
                  Submit Resume
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default AboutUs
