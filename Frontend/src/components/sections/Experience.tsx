import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, MapPin, Calendar } from 'lucide-react';
import { Card } from '../ui/Card';
import { experiences } from '../../data/experience';

export const Experience: React.FC = () => {
  // Helper function to return icon based on experience type
  const getIcon = (type: string) => {
    switch (type) {
      case 'freelance':
        return <Briefcase className="h-6 w-6 text-white" />;
      case 'education':
        return <GraduationCap className="h-6 w-6 text-white" />;
      default:
        return <Briefcase className="h-6 w-6 text-white" />;
    }
  };

  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Experience & Education
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            My journey through the world of technology and development
          </p>
        </motion.div>

        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 to-purple-600"></div>

          <div className="space-y-12">
            {experiences.map((experience, index) => {
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={experience.id}
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className={`relative flex items-center ${
                    isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline Icon */}
                  <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 flex items-center justify-center z-10">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
                      {getIcon(experience.type)}
                    </div>
                  </div>

                  {/* Experience Card */}
                  <div
                    className={`w-full md:w-5/12 ${
                      isEven ? 'md:pr-8' : 'md:pl-8'
                    } ml-20 md:ml-0`}
                  >
                    <Card className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                            {experience.title}
                          </h3>
                          <p className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-2">
                            {experience.company}
                          </p>
                        </div>
                      </div>

                      <div className="flex flex-wrap items-center gap-4 text-gray-600 dark:text-gray-400 mb-4">
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          {experience.duration}
                        </div>
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 mr-1" />
                          {experience.location}
                        </div>
                      </div>

                      <ul className="space-y-2">
                        {experience.description.map((item, itemIndex) => (
                          <motion.li
                            key={itemIndex}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: itemIndex * 0.1 }}
                            className="text-gray-600 dark:text-gray-400 flex items-start"
                          >
                            <span className="text-blue-600 dark:text-blue-400 mr-2 mt-1">•</span>
                            {item}
                          </motion.li>
                        ))}
                      </ul>
                    </Card>
                  </div>

                  {/* Spacer for layout alignment */}
                  <div className="hidden md:block w-5/12"></div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
