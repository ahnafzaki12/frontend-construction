import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const services = [
    "Commercial Construction",
    "Residential Building",
    "Infrastructure",
    "Renovation",
    "Project Management",
  ]

  const quickLinks = [
    { name: "About Us", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#projects" },
    { name: "Blogs", href: "#blogs" },
    { name: "Contact", href: "#contact" },
  ]

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
  ]

  return (
    <footer className="bg-slate-900 text-slate-300 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold text-white mb-2">Amazing Constructions</h3>
            <p className="text-slate-400 text-sm mb-4">
              We provide professional construction services with a commitment to quality and client satisfaction.
            </p>
            <div className="flex space-x-3 mt-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="hover:text-white"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-white mb-3">Services</h4>
            <ul className="space-y-2">
              {services.map((item, idx) => (
                <li key={idx}>
                  <a href="#services" className="hover:text-white">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-3">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, idx) => (
                <li key={idx}>
                  <a href={link.href} className="hover:text-white">{link.name}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-semibold text-white mb-3">Contact</h4>
            <div className="flex items-start gap-2">
              <Phone className="w-4 h-4 mt-1 text-slate-400" />
              <span>(999) 000-0000</span>
            </div>
            <div className="flex items-start gap-2">
              <Mail className="w-4 h-4 mt-1 text-slate-400" />
              <span>info@amazingconstructions.com</span>
            </div>
            <div className="flex items-start gap-2">
              <MapPin className="w-4 h-4 mt-1 text-slate-400" />
              <span>Rungkut Asri Barat 1234</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-700">
        <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col sm:flex-row justify-between items-center text-xs text-slate-500">
          <p>&copy; {currentYear} Amazing Constructions. All rights reserved.</p>
          <div className="flex gap-4 mt-2 sm:mt-0">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
