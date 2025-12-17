import { motion } from "framer-motion";
import { Section } from "../ui/Section";
import { Card } from "../ui/Card";
import { Button } from "../ui/Button";
import { certifications } from "../../data/portfolio";
import { fadeInUp, staggerContainer } from "../../utils/animations";
import { ExternalLink } from "lucide-react";

export const Certifications = () => {
  return (
    <Section id="certifications">
      <motion.div className="text-center mb-16" {...fadeInUp}>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          <span className="text-blue-400">Certifications</span>
        </h2>
        <p className="text-gray-300 text-lg max-w-2xl mx-auto">
          Professional certifications that validate my expertise and commitment
          to continuous learning
        </p>
      </motion.div>

      <motion.div
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        {certifications.map((cert) => (
          <motion.div
            key={cert.id}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <Card className="h-full text-center">
              <div className="flex justify-center mb-4">
                <div
                  className="
                      bg-white 
                      rounded-t-2xl 
                      shadow-lg 
                      overflow-hidden 
                      border border-gray-200 
                      hover:shadow-2xl 
                      transition-all 
                      duration-300 
                      hover:-translate-y-1
                      w-full
                  "
                >
                  <img
                    src={cert.imageUrl}
                    alt={cert.title}
                    className="w-full h-56 object-cover"
                  />
                </div>
              </div>

              <div className="">
                <h3 className="text-xl font-semibold text-white mb-2">
                  {cert.title}
                </h3>

                <p className="text-blue-400 font-medium mb-2">{cert.issuer}</p>

                <p className="text-gray-400 mb-2">{cert.year}</p>

                {cert.credentialID && (
                  <div className="mb-4">
                    <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">
                      Credential ID
                    </p>
                    <p className="text-sm text-gray-300 font-mono bg-gray-700/50 px-2 py-1 rounded">
                      {cert.credentialID}
                    </p>
                  </div>
                )}

                {cert.verificationUrl && (
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => window.open(cert.verificationUrl, "_blank")}
                    className="inline-flex items-center gap-2"
                  >
                    <ExternalLink size={16} />
                    Verify
                  </Button>
                )}
              </div>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
};
