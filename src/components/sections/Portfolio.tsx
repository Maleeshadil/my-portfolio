import { motion } from 'framer-motion';
import { Section } from '../ui/Section';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { projects } from '../../data/portfolio';
import { fadeInUp, staggerContainer } from '../../utils/animations';
import { Github, ExternalLink } from 'lucide-react';

export const Portfolio = () => {
  return (
    <Section id="portfolio" className="bg-gray-900/50">
      <motion.div className="text-center mb-16" {...fadeInUp}>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          My <span className="text-blue-400">Projects</span>
        </h2>
        <p className="text-gray-300 text-lg max-w-2xl mx-auto">
          Here are some of my recent projects that showcase my skills and
          experience
        </p>
      </motion.div>

      <motion.div
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        {projects.map((project) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 ,delay:0.4}}
            viewport={{ once: true }}
          >
            <Card className="h-full overflow-hidden">
              <div className="relative overflow-hidden rounded-t-lg mb-4">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>

              <h3 className="text-xl font-semibold text-white mb-3">
                {project.title}
              </h3>

              <p className="text-gray-300 mb-4 line-clamp-3">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-3 mt-auto">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => window.open(project.githubUrl, "_blank")}
                  className="flex items-center gap-2 flex-1"
                >
                  <Github size={16} />
                  Code
                </Button>
                {project.liveUrl && (
                  <Button
                    size="sm"
                    onClick={() => window.open(project.liveUrl, "_blank")}
                    className="flex items-center gap-2 flex-1"
                  >
                    <ExternalLink size={16} />
                    Live
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