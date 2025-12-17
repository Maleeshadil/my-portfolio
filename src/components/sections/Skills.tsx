import { motion } from 'framer-motion';
import { Section } from '../ui/Section';
import { Card } from '../ui/Card';
import { skillCategories } from '../../data/portfolio';
import { fadeInUp, staggerContainer } from '../../utils/animations';

export const Skills = () => {
  return (
    <Section id="skills">
      <motion.div className="text-center mb-16" {...fadeInUp}>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          My <span className="text-blue-400">Skills</span>
        </h2>
        <p className="text-gray-300 text-lg max-w-2xl mx-auto">
          Here are the technologies and tools I work with to bring ideas to life
        </p>
      </motion.div>

      <motion.div
        className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        {skillCategories.map((category, index) => (
          <motion.div key={category.title} variants={fadeInUp}>
            <Card className="h-full">
              <h3 className="text-xl font-semibold text-white mb-6 text-center">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-blue-400 text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <motion.div
                        className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
};