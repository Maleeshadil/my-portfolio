import { motion } from "framer-motion";
import { useState } from "react";
import { Section } from "../ui/Section";
import { Card } from "../ui/Card";
import { Button } from "../ui/Button";
import { sendEmail } from "../../utils/emailjs";
import { fadeInUp, fadeInLeft, fadeInRight } from "../../utils/animations";
import { Mail, Phone, MapPin } from "lucide-react";
import { ContactForm } from "../../types";
import { socialLinks } from "../../data/scoilMediaLinks";
export const Contact = () => {
  const [formData, setFormData] = useState<ContactForm>({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const success = await sendEmail(formData);

    if (success) {
      setSubmitStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } else {
      setSubmitStatus("error");
    }

    setIsSubmitting(false);
    setTimeout(() => setSubmitStatus("idle"), 5000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "maleeshadil77@gmail.com",
      href: "mailto:maleeshadil77@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+94 74 213 3196",
      href: "tel:+94742133196",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Ratnpura, Sri Lanka",
      href: "#",
    },
  ];



  return (
    <Section id="contact" className="bg-gray-900/50">
      <motion.div className="text-center mb-16" {...fadeInUp}>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Get In <span className="text-blue-400">Touch</span>
        </h2>
        <p className="text-gray-300 text-lg max-w-2xl mx-auto">
          Let's discuss your project or just say hello. I'm always open to new
          opportunities.
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 ,delay:0.2}}
          viewport={{ once: true }}
        >
          <div className="space-y-6 mb-8">
            {contactInfo.map((info) => (
              <Card key={info.label} className="p-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-blue-500/20 rounded-lg">
                    <info.icon size={24} className="text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">{info.label}</h3>
                    <a
                      href={info.href}
                      className="text-gray-300 hover:text-blue-400 transition-colors"
                    >
                      {info.value}
                    </a>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <Card className="p-6">
            <h3 className="text-white font-semibold mb-4">Follow Me</h3>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-blue-500/20 rounded-lg text-blue-400 hover:bg-blue-500/30 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon />
                </motion.a>
              ))}
            </div>
          </Card>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay:0.4 }}
          viewport={{ once: true }}
        >
          <Card className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-white font-medium mb-2"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-white font-medium mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-white font-medium mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                  placeholder="Your message here..."
                />
              </div>

              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>

              {submitStatus === "success" && (
                <p className="text-green-400 text-center">
                  Message sent successfully!
                </p>
              )}
              {submitStatus === "error" && (
                <p className="text-red-400 text-center">
                  Failed to send message. Please try again.
                </p>
              )}
            </form>
          </Card>
        </motion.div>
      </div>
    </Section>
  );
};
