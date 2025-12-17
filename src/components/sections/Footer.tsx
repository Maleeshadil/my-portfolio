import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import { socialLinks } from "../../data/scoilMediaLinks";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Certifications", href: "#certifications" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="bg-gray-900 text-white border-t border-gray-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Column 1 - About */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
              Maleesha Dilshan
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Passionate Software Engineer specializing in Full Stack & Backend
              Development (MERN Stack, Laravel). Building modern, scalable, and
              user-focused web applications.
            </p>
            <div className="flex gap-4 mt-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-blue-500/20 rounded-lg text-white-400 hover:bg-blue-500/30 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Column 2 - Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <div className="grid grid-cols-2 gap-2">
              {quickLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  whileHover={{ x: 5 }}
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Column 3 - Contact Me */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold mb-4">Contact Me</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <Mail size={18} className="mr-3 text-blue-400" />
                <span className="text-gray-300">maleeshadil77@gmail.com</span>
              </div>
              <div className="flex items-center">
                <Phone size={18} className="mr-3 text-blue-400" />
                <span className="text-gray-300">+94 74 213 3196</span>
              </div>
              <div className="flex items-center">
                <MapPin size={18} className="mr-3 text-blue-400" />
                <span className="text-gray-300">Ratnpura, Sri Lanka</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Line */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 mt-8 pt-8 text-center"
        >
          <p className="text-gray-400">
            © {currentYear} Maleesha Dilshan. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};


