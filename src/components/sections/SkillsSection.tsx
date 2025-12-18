import { useState, type ComponentType } from "react";
import {
  Code2,
  Database,
  Brain,
  Wrench,
  Globe,
  Server,
  Smartphone,
  GitBranch,
  Palette,
  Monitor,
} from "lucide-react";

const skillIcons: Record<string, ComponentType<any>> = {
  "HTML5/CSS3": Globe,
  JavaScript: Code2,
  React: Code2,
  "Tailwind CSS": Palette,
  Bootstrap: Palette,
  "UI/UX Design": Monitor,
  "Node.js": Server,
  "Express.js": Server,
  Laravel: Server,
  PHP: Server,
  Java: Code2,
  "C#": Code2,
  MongoDB: Database,
  MySQL: Database,
  Firebase: Database,
  "RESTful APIs": Server,
  "TMDB API Integration": Server,
  "Git/GitHub": GitBranch,
  "Visual Studio Code": Code2,
  "Android Studio": Smartphone,
  Postman: Wrench,
  "Agile/Scrum": Wrench,
};

import { skillCategories } from "../../data/portfolio";
import { motion } from "framer-motion";
import { fadeInUp, fadeInLeft, fadeInRight } from "../../utils/animations";


const categories = [
  { id: "frontend", name: "Frontend", icon: Globe },
  { id: "backend", name: "Backend", icon: Server },
  { id: "tools", name: "Tools", icon: Wrench },
];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("frontend");

  const skills = skillCategories.flatMap((category) => category.skills);

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

    return (
      <motion.div>
        <section id="skills" className="py-24 px-4 relative ">
          <div className="container mx-auto max-w-6xl">
            <motion.div {...fadeInUp}>
              {/* Header */}
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                  My <span className="text-blue-400">Skills</span>
                </h2>
                <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                  Here are the technologies and tools I work with to bring ideas
                  to life
                </p>
                <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-6"></div>
              </div>
            </motion.div>

            {/* Category Sidebar Navigation */}
            <div className="flex flex-col lg:flex-row gap-8">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 ,delay:0.2}}
                viewport={{ once: true }}
              >
                {/* Sidebar */}
                <div className="lg:w-64 flex-shrink-0">
                  <div className="bg-gradient-to-b from-gray-800/70 via-gray-800/50 to-gray-900/70 rounded-3xl p-6 shadow-xl border border-border sticky top-8">
                    <h3 className="text-lg font-bold mb-6 text-amber-50 flex items-center gap-2">
                      <Code2 size={20} className="text-primary" />
                      Categories
                    </h3>
                    <nav className="space-y-2">
                      {categories.map((category) => {
                        const IconComponent = category.icon;
                        const count =
                          category.id === "all"
                            ? skills.length
                            : skills.filter((s) => s.category === category.id)
                                .length;

                        return (
                          <button
                            key={category.id}
                            onClick={() => setActiveCategory(category.id)}
                            className={`
                        cursor-pointer w-full flex items-center gap-3 px-4 py-3 rounded-2xl text-left
                        transition-all duration-300 group relative overflow-hidden
                        ${
                          activeCategory === category.id
                            ? "bg-primary text-white shadow-lg shadow-primary/20"
                            : "bg-transparent text-amber-50 hover:bg-muted/50"
                        }
                      `}
                          >
                            <IconComponent
                              size={18}
                              className={`
                          transition-transform duration-300 group-hover:scale-110
                          ${
                            activeCategory === category.id
                              ? "text-white"
                              : "text-primary"
                          }
                        `}
                            />
                            <span className="font-medium flex-1">
                              {category.name}
                            </span>
                            <span
                              className={`
                          text-xs px-2 py-1 rounded-full font-bold
                          ${
                            activeCategory === category.id
                              ? "bg-white/20 text-white"
                              : "bg-primary/10 text-primary"
                          }
                        `}
                            >
                              {count}
                            </span>

                            {/* Active indicator */}
                            {activeCategory === category.id && (
                              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-white rounded-r-full"></div>
                            )}
                          </button>
                        );
                      })}
                    </nav>
                  </div>
                </div>
              </motion.div>
              
              {/* Skills Cards Grid */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="flex-1"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                  {filteredSkills.map((skill, index) => {
                    const IconComponent = skillIcons[skill.name] || Code2;

                    return (
                      <div
                        key={index}
                        className="group relative bg-gradient-to-b from-gray-800/70 via-gray-800/50 to-gray-900/7 rounded-2xl p-6 shadow-lg border border-border
                             hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500
                             hover:-translate-y-2 hover:border-primary/20"
                        style={{
                          animationDelay: `${index * 50}ms`,
                        }}
                      >
                        {/* Skill Header */}
                        <div className="flex items-start gap-4 mb-4">
                          <div className="p-3 rounded-xl bg-gray-700 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                            <IconComponent
                              size={24}
                              className="text-primary group-hover:text-white transition-colors duration-300"
                            />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-bold text-gray-300  group-hover:text-primary transition-colors duration-300">
                              {skill.name}
                            </h4>
                            <p className="text-sm text-gray-300 capitalize font-medium">
                              {skill.category}
                            </p>
                          </div>
                        </div>

                        {/* Skill Level Bar */}
                        <div className="space-y-2">
                          <div className="flex justify-between items-center">
                            <span className="text-xs font-medium text-gray-300">
                              Proficiency
                            </span>
                            <span className="text-xs font-bold text-blue-400">
                              {skill.level}%
                            </span>
                          </div>
                          <div className="w-full bg-border rounded-full h-2 overflow-hidden">
                            <div
                              className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-1000 ease-out"
                              style={{
                                width: `${skill.level}%`,
                                animationDelay: `${index * 100 + 300}ms`,
                              }}
                            ></div>
                          </div>
                        </div>

                        {/* Hover Glow Effect */}
                        <div
                          className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/5 to-transparent 
                                  opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                        ></div>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </motion.div>
    );
};
