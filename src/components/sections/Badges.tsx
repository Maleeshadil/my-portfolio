import { motion } from "framer-motion";
import { Section } from "../ui/Section";
import { Card } from "../ui/Card";
import { badges } from "../../data/portfolio";
import { fadeInUp, staggerContainer } from "../../utils/animations";

export const Badges = () => {
  return (
    <Section id="badges" className="bg-gray-100/60 dark:bg-gray-800/60">
      <motion.div className="text-center mb-16" {...fadeInUp}>
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
          Earned <span className="text-blue-400">Badges</span>
        </h2>
        <p className="text-gray-700 dark:text-gray-300 text-lg max-w-2xl mx-auto">
          Recognition badges earned through various learning platforms and contributions
        </p>
      </motion.div>

      <motion.div
        className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        {badges.map((badge) => (
          <motion.div
            key={badge.id}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="h-full text-center p-4">
              <div className="flex justify-center mb-4">
                <div className="w-20 h-20 rounded-full overflow-hidden bg-white p-2 shadow-lg">
                  <img
                    src={badge.imageUrl}
                    alt={badge.title}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>

              <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                {badge.title}
              </h3>

              <p className="text-blue-400 font-medium text-xs mb-2">{badge.issuer}</p>

              <p className="text-gray-600 dark:text-gray-400 text-xs mb-2">{badge.year}</p>

              <p className="text-gray-700 dark:text-gray-300 text-xs">
                {badge.description}
              </p>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
};