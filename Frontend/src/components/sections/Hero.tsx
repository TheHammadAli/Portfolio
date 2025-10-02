import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Download, Github, Linkedin } from 'lucide-react';
import { Button } from '../ui/Button';
import { AnimatedText } from '../common/AnimatedText';

const roles = [
  'MERN Stack Developer',
  'Frontend Specialist',
  'Full Stack Developer'
];

export const Hero: React.FC = () => {
  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const scrollToNext = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen pt-10 flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-gray-600 dark:text-gray-400 mb-4"
            >
              Hello, I'm
            </motion.p>
            
            <AnimatedText
              text="Hammad Ali"
              className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6"
              delay={0.4}
            />

            <div className="h-20 mb-8">
              <motion.p 
                key={currentRole}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="text-2xl sm:text-3xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-semibold"
              >
                {roles[currentRole]}
              </motion.p>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="text-xl text-gray-600 dark:text-gray-400 mb-10 max-w-2xl"
            >
              I craft exceptional digital experiences with modern web technologies. 
              Passionate about creating scalable, user-friendly applications that make a difference.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12"
            >
              <Button
                variant="primary"
                size="lg"
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="group"
              >
                Get In Touch
              </Button>
              
              <Button
  variant="outline"
  size="lg"
  href="/Hammad.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="group"
>
  Resume
</Button>

            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="flex gap-6 justify-center lg:justify-start"
            >
              {[
                { icon: Github, href: 'https://github.com/hammad-Programer', label: 'GitHub' },
                { icon: Linkedin, href: 'https://www.linkedin.com/in/hammad-ali-765b05289/', label: 'LinkedIn' },
              ].map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 1.4 + index * 0.1 }}
                  >
                    <Icon className="h-6 w-6" />
                    <span className="sr-only">{social.label}</span>
                  </motion.a>
                );
              })}
            </motion.div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative mx-auto w-80 h-80 lg:w-96 lg:h-96">
              {/* Background Circles */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-600 rounded-full animate-spin-slow opacity-20"></div>
              <div className="absolute inset-2 bg-gradient-to-r from-purple-400 to-blue-600 rounded-full animate-pulse"></div>
              
              {/* Profile Image */}
              <motion.img
                src="https://i.postimg.cc/26f29Lqx/Whats-App-Image-2025-10-02-at-7-48-16-PM.jpg"
                alt="Hammad Ali"
                className="absolute inset-4 w-full h-full object-cover rounded-full border-4 border-white dark:border-gray-800 shadow-2xl"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />

              {/* Floating Elements */}
              <motion.div
                className="absolute -top-4 -right-4 bg-blue-500 text-white p-3 rounded-full shadow-lg"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <span className="text-2xl">⚡</span>
              </motion.div>
              
              <motion.div
                className="absolute -bottom-4 -left-4 bg-purple-500 text-white p-3 rounded-full shadow-lg"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: 1 }}
              >
                <span className="text-2xl">🚀</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.button
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        whileHover={{ scale: 1.1 }}
      >
        <ChevronDown className="h-8 w-8" />
      </motion.button>
    </section>
  );
};