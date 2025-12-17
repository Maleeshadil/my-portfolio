import { motion } from "framer-motion";
import { Section } from "../ui/Section";
import { Card } from "../ui/Card";
import { Button } from "../ui/Button";
import { Download, GraduationCap } from "lucide-react";
import { fadeInLeft} from "../../utils/animations";

export const About = () => {
  const handleDownloadCV = () => {
    // Replace with actual CV download link
    window.open("/Maleesha_Dilshan_CV .pdf", "_blank");
  };

  return (
    <Section id="about" className="bg-gray-100/60 dark:bg-gray-800/60">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <motion.div {...fadeInLeft}>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 text-center lg:text-left">
            About Me
          </h2>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-8 text-justify">
              I am a passionate Software Engineer with a strong interest in
              building modern, scalable, and user-focused web applications. I
              enjoy turning ideas into practical solutions through clean,
              efficient, and maintainable code. Currently, I am focusing on Full
              Stack and Backend Development , working with the MERN Stack
              (MongoDB, Express, React, Node.js) and Laravel.I am continuously
              strengthening my skills in frontend and backend development while
              following best practices in application architecture and
              performance.
            </p>
            <p
              className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-8"
              text-justify
            >
              I have gained hands-on experience through academic projects and
              personal initiatives, developing responsive web applications,
              RESTful APIs, and database-driven systems.I am actively seeking
              internship opportunities where I can contribute to real-world
              projects, collaborate with experienced professionals, and growing
              as a professional software engineer while working with a dynamic
              and innovative team.
            </p>
            <Button
              onClick={handleDownloadCV}
              className="inline-flex items-center gap-2 "
            >
              <Download size={20} />
              Download CV
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Card className="p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-blue-500/20 rounded-lg">
                <GraduationCap size={32} className="text-blue-400" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Education
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Academic Background
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <motion.div
                className="border-l-4 border-blue-500 pl-4"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h4 className="text-[1.125rem] font-semibold text-white">
                  Bsc(Hons) In Software Engineering -TOP-UP
                </h4>
                <p className="text-blue-400 font-medium">
                  Cardiff Metropolitan University(United Kingdom)
                </p>
                <span className="text-gray-400">ICTBT Campus</span>
                <p className="text-gray-400">In progress-part time</p>
              </motion.div>
            </div>

            <div className="space-y-4 mt-3">
              <motion.div
                className="border-l-4 border-blue-500 pl-4"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h4 className="text-[1.125rem] font-semibold text-white">
                  BTEC HND in Computing Software Engineering
                </h4>
                <p className="text-blue-400 font-medium">Pearson</p>
                <span className="text-gray-400">Esoft Metro Campus</span>
                <p className="text-gray-400">2023-2025</p>
              </motion.div>
            </div>
            <div className="space-y-4 mt-3">
              <motion.div
                className="border-l-4 border-blue-500 pl-4"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h4 className="ttext-[1.125rem] font-semibold text-white">
                  Trainee – Full Stack Developer Programme – Open Learning
                  Platform
                </h4>
                <p className="text-blue-400 font-medium">
                  University of Moratuwa
                </p>

                <p className="text-gray-400">2022</p>
              </motion.div>
            </div>
          </Card>
        </motion.div>
      </div>
    </Section>
  );
};
