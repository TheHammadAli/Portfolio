import React from 'react';
import { motion } from 'framer-motion';
import { User, Award, Target, } from 'lucide-react';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';

const stats = [
  { label: 'Years Experience', value: '1+', icon: Award },
  { label: 'Projects Completed', value: '10+', icon: Target },
  { label: 'Clients Served', value: '10+', icon: User }, // ✅ NEW STAT
];

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Passionate developer with a love for creating digital experiences that matter
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative">
              <img
                src="https://i.postimg.cc/26f29Lqx/Whats-App-Image-2025-10-02-at-7-48-16-PM.jpg"
                alt="About Hammad Ali"
                className="rounded-2xl shadow-2xl w-full max-w-md mx-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl"></div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
              Building Tomorrow's Web
            </h3>
            
            <div className="space-y-4 text-gray-600 dark:text-gray-400">
              <p>
                I'm a passionate MERN Stack Developer with over 1 years of experience creating 
                modern, scalable web applications. My journey began with a curiosity about how 
                websites work, and it has evolved into a deep passion for crafting digital experiences 
                that make a difference.
              </p>
              
              <p>
                I specialize in the MERN stack (MongoDB, Express.js, React, Node.js) and have a 
                strong foundation in modern web technologies. I love turning complex problems into 
                simple, beautiful, and intuitive solutions.
              </p>
              
              <p>
                When I'm not coding, you'll find me exploring new technologies, contributing to 
                open-source projects, or sharing knowledge with the developer community through 
                blogs and mentoring.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="primary"
                size="lg"
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Let's Work Together
              </Button>
              
            </div>
          </motion.div>
        </div>

    

      </div>
    </section>
  );
};