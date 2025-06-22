import React, { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Mail, Github, Code, Database, Cpu, Gamepad2, Menu, X } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showGithubDisclaimer, setShowGithubDisclaimer] = useState(false);
  const { scrollYProgress } = useScroll();
  const headerOpacity = useTransform(scrollYProgress, [0, 0.1], [0.95, 0.9]);

  const skills = [
    {
      icon: <Code className="w-12 h-12" />,
      name: "JAVA",
      level: "ADVANCED",
      description: "Core language for Minecraft plugin development with 1 year experience",
      color: "#00D9FF"
    },
    {
      icon: <Database className="w-12 h-12" />,
      name: "SQL",
      level: "INTERMEDIATE",
      description: "Database management, optimization and complex query design",
      color: "#FF6B6B"
    },
    {
      icon: <Cpu className="w-12 h-12" />,
      name: "OOP",
      level: "ADVANCED",
      description: "Object-oriented programming principles and design patterns",
      color: "#4ECDC4"
    },
    {
      icon: <Gamepad2 className="w-12 h-12" />,
      name: "BUKKIT",
      level: "INTERMEDIATE",
      description: "Minecraft server plugin development and API integration",
      color: "#FFE66D"
    }
  ];

  const projects = [
    {
      title: "CUSTOMECONOMY PLUGIN",
      description: "Comprehensive economy system with MySQL integration, featuring multi-currency support, transaction logging, and admin panel.",
      technologies: ["JAVA", "BUKKIT API", "MYSQL", "YAML"],
      status: "IN DEVELOPMENT",
      color: "#00D9FF"
    },
    {
      title: "PVP ARENA MANAGER",
      description: "Dynamic PvP arena system with real-time matchmaking, spectator mode, and comprehensive statistical tracking.",
      technologies: ["JAVA", "SPIGOT API", "SQLITE", "REDIS"],
      status: "IN DEVELOPMENT",
      color: "#FF6B6B"
    },
    {
      title: "SERVER UTILITIES SUITE",
      description: "Essential server management tools including player moderation, world management, and permission systems.",
      technologies: ["JAVA", "BUKKIT API", "POSTGRESQL", "JSON"],
      status: "IN DEVELOPMENT",
      color: "#4ECDC4"
    },
    {
      title: "WORLD PROTECTION SYSTEM",
      description: "Advanced world protection plugin with region management, grief prevention, and automated backup systems for server security.",
      technologies: ["JAVA", "SPIGOT API", "MONGODB", "YAML"],
      status: "IN DEVELOPMENT",
      color: "#FFE66D"
    }
  ];

  const navigationItems = ['ABOUT', 'SKILLS', 'PROJECTS', 'CONTACT'];
  const quickFacts = [
    "1 YEAR JAVA DEVELOPMENT",
    "BUKKIT/SPIGOT SPECIALIST",
    "OOP PRINCIPLES EXPERT",
    "SQL OPTIMIZATION PRO",
    "REACT & TAILWIND CSS"
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const slideVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const handleGithubClick = (e) => {
    e.preventDefault();
    setShowGithubDisclaimer(true);
  };

  const handleGithubContinue = () => {
    window.open('https://github.com/JamieMCAdam', '_blank', 'noopener,noreferrer');
    setShowGithubDisclaimer(false);
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <motion.header 
        style={{ opacity: headerOpacity }}
        className="fixed top-0 w-full bg-black/80 backdrop-blur-xl border-b border-white/10 z-50"
      >
        <div className="max-w-7xl mx-auto px-6 py-6 flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-2xl font-black tracking-tight"
          >
            JAMIE MC ADAM
          </motion.div>
          
          <nav className="hidden md:flex space-x-12">
            {navigationItems.map((item, index) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-sm font-bold tracking-wider hover:text-white/70 transition-colors duration-300"
              >
                {item}
              </motion.a>
            ))}
          </nav>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 hover:bg-white/10 rounded-xl transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        <motion.div
          initial={{ x: '100%' }}
          animate={{ x: isMenuOpen ? 0 : '100%' }}
          transition={{ 
            duration: 0.4, 
            ease: [0.25, 0.46, 0.45, 0.94],
            type: "tween"
          }}
          className="md:hidden fixed top-0 right-0 w-1/2 h-screen bg-black/95 backdrop-blur-xl border-l border-white/20 z-40"
        >
          <div className="pt-24 px-6">
            <nav className="flex flex-col space-y-8">
              {navigationItems.map((item, index) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setIsMenuOpen(false)}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ 
                    opacity: isMenuOpen ? 1 : 0, 
                    x: isMenuOpen ? 0 : 50 
                  }}
                  transition={{ 
                    duration: 0.3, 
                    delay: isMenuOpen ? index * 0.1 + 0.2 : 0,
                    ease: "easeOut"
                  }}
                  className="text-2xl font-black tracking-wider hover:text-white/70 transition-colors py-3 border-b border-white/10"
                >
                  {item}
                </motion.a>
              ))}
            </nav>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isMenuOpen ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className={`md:hidden fixed top-0 left-0 w-1/2 h-screen backdrop-blur-sm bg-black/20 z-30 ${
            isMenuOpen ? 'pointer-events-auto' : 'pointer-events-none'
          }`}
          onClick={() => setIsMenuOpen(false)}
        />
      </motion.header>

      <section className="pt-32 pb-24 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-none mb-8">
              MINECRAFT
              <br />
              <span style={{ color: '#00D9FF' }}>DEVELOPER</span>
            </h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-xl md:text-2xl text-white/70 mb-12 max-w-2xl mx-auto leading-relaxed"
            >
              Crafting immersive server experiences through robust Java development 
              and innovative plugin architecture.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex justify-center"
            >
              <motion.a
                href="mailto:j.k.minecraft@hotmail.com"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{ backgroundColor: '#00D9FF' }}
                className="px-12 py-4 text-black font-bold text-sm tracking-wider uppercase rounded-2xl transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/25 inline-block text-center"
              >
                GET IN TOUCH
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section id="about" className="py-24 px-6 bg-white/5 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
          >
            <motion.h2 
              variants={itemVariants}
              className="text-5xl md:text-7xl font-black tracking-tighter mb-16 text-center"
            >
              ABOUT ME
            </motion.h2>
            
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div variants={slideVariants} className="space-y-8">
                <p className="text-xl leading-relaxed text-white/80">
                  I'm a passionate Minecraft developer with deep expertise in Java programming 
                  and server-side development. My focus lies in creating robust, scalable plugins 
                  using the Bukkit/Spigot API, combined with modern web development skills in React and Tailwind CSS.
                </p>
                <p className="text-xl leading-relaxed text-white/80">
                  With strong database management skills and solid object-oriented programming 
                  principles, I ensure efficient data handling and optimal performance for 
                  multiplayer environments.
                </p>
                <div className="flex items-center gap-4 pt-4">
                  <div className="w-4 h-4 rounded-full" style={{ backgroundColor: '#00D9FF' }}></div>
                  <span className="font-bold text-lg tracking-wide">AVAILABLE FOR REMOTE WORK</span>
                </div>
              </motion.div>
              
              <motion.div 
                variants={itemVariants}
                className="bg-white/10 backdrop-blur-sm p-12 rounded-3xl border border-white/20"
              >
                <h3 className="text-2xl font-black mb-8 tracking-wide">QUICK FACTS</h3>
                <div className="space-y-6">
                  {quickFacts.map((fact, index) => (
                    <motion.div
                      key={fact}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="flex items-center gap-4"
                    >
                      <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#00D9FF' }}></div>
                      <span className="font-bold text-sm tracking-wider">{fact}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="skills" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
          >
            <motion.h2 
              variants={itemVariants}
              className="text-5xl md:text-7xl font-black tracking-tighter mb-20 text-center"
            >
              TECHNICAL SKILLS
            </motion.h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {skills.map((skill) => (
                <motion.div
                  key={skill.name}
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: `0 25px 50px -12px ${skill.color}25`
                  }}
                  className="bg-white/10 backdrop-blur-sm p-8 rounded-3xl border border-white/20 hover:border-white/30 transition-all duration-300 cursor-pointer"
                >
                  <div 
                    className="w-20 h-20 rounded-2xl flex items-center justify-center mb-6 text-black"
                    style={{ backgroundColor: skill.color }}
                  >
                    {skill.icon}
                  </div>
                  <h3 className="text-2xl font-black mb-2 tracking-wide">{skill.name}</h3>
                  <p className="text-sm font-bold tracking-wider mb-4" style={{ color: skill.color }}>
                    {skill.level}
                  </p>
                  <p className="text-white/70 leading-relaxed">{skill.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section id="projects" className="py-24 px-6 bg-white/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
          >
            <motion.h2 
              variants={itemVariants}
              className="text-5xl md:text-7xl font-black tracking-tighter mb-20 text-center"
            >
              FEATURED PROJECTS
            </motion.h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
              {projects.map((project) => (
                <motion.div
                  key={project.title}
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.02,
                    boxShadow: `0 25px 50px -12px ${project.color}25`
                  }}
                  className="bg-white/10 backdrop-blur-sm p-8 rounded-3xl border border-white/20 transition-all duration-300 group relative"
                >
                  <div className="flex items-start justify-between mb-6 relative">
                    <h3 className="text-xl font-black tracking-wide leading-tight group-hover:opacity-80 transition-opacity">
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-2 flex-shrink-0 ml-4">
                      <span className="text-xs font-bold tracking-wider text-white/40 uppercase">Private</span>
                      <div className="w-2 h-2 rounded-full bg-white/40"></div>
                    </div>
                  </div>
                  
                  <p className="text-white/70 mb-6 leading-relaxed">{project.description}</p>
                  
                  <div className="mb-6">
                    <p className="text-sm font-bold tracking-wider mb-3" style={{ color: project.color }}>
                      TECHNOLOGIES
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span 
                          key={tech} 
                          className="bg-white/10 backdrop-blur-sm px-3 py-1 rounded-xl text-xs font-bold tracking-wider border border-white/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div 
                    className="inline-block px-4 py-2 rounded-xl text-xs font-bold tracking-wider text-black"
                    style={{ backgroundColor: project.color }}
                  >
                    {project.status}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section id="contact" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
          >
            <motion.h2 
              variants={itemVariants}
              className="text-5xl md:text-7xl font-black tracking-tighter mb-20 text-center"
            >
              GET IN TOUCH
            </motion.h2>
            
            <div className="text-center">
              <motion.div variants={slideVariants} className="mb-12">
                <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto leading-relaxed">
                  Ready to discuss your next Minecraft project? Let's create something amazing together.
                </p>
                
                <motion.a
                  href="mailto:j.k.minecraft@hotmail.com"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-4 px-12 py-6 text-black font-bold text-lg tracking-wider uppercase rounded-3xl transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/25"
                  style={{ backgroundColor: '#00D9FF' }}
                >
                  <Mail className="w-6 h-6" />
                  SEND EMAIL
                </motion.a>
              </motion.div>
              
              <motion.div variants={itemVariants} className="flex justify-center gap-6">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={handleGithubClick}
                  className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center hover:bg-white/20 transition-all duration-300 border border-white/20"
                >
                  <Github className="w-8 h-8" />
                </motion.button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {showGithubDisclaimer && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-6"
          onClick={() => setShowGithubDisclaimer(false)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="bg-white/10 backdrop-blur-xl p-8 rounded-3xl border border-white/20 max-w-md w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="text-center">
              <div className="w-16 h-16 bg-red-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Github className="w-8 h-8 text-red-400" />
              </div>
              
              <h3 className="text-2xl font-black mb-4 tracking-wide">
                IMPORTANT NOTICE
              </h3>
              
              <p className="text-white/70 mb-6 leading-relaxed">
                My old GitHub account was hacked and deleted. 
                I have created a new account. You are now leaving this site.
              </p>
              
              <div className="flex gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setShowGithubDisclaimer(false)}
                  className="flex-1 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-2xl font-bold text-sm tracking-wider uppercase border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  CANCEL
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleGithubContinue}
                  className="flex-1 px-6 py-3 bg-red-500 rounded-2xl font-bold text-sm tracking-wider uppercase text-white hover:bg-red-600 transition-all duration-300 text-center"
                >
                  CONTINUE
                </motion.button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}

      <footer className="py-12 px-6 bg-white/5 backdrop-blur-sm border-t border-white/10">
        <div className="max-w-7xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-sm tracking-wider font-medium text-white/60"
          >
            © 2025 JAMIE MC ADAM. BUILT WITH REACT & TAILWIND CSS.
          </motion.p>
        </div>
      </footer>
    </div>
  );
}

export default App;