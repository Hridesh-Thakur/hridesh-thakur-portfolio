"use client";

import React from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { 
  Code2, 
  Cpu, 
  Layers, 
  Mail, 
  Github, 
  Linkedin, 
  ExternalLink, 
  Terminal, 
  BrainCircuit, 
  Rocket,
  GraduationCap,
  Sparkles,
  ChevronRight,
  Monitor,
  Box,
  Hexagon,
  Bot,
  Triangle,
  Circle,
  Square,
  Star
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useMotionValue } from "framer-motion";
import Link from "next/link";

function RobotAnimation() {
  const containerRef = React.useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  
  const mouseTiltX = useTransform(mouseY, [-250, 250], [20, -20]);
  const mouseTiltY = useTransform(mouseX, [-250, 250], [-20, 20]);
  const scrollTiltX = useTransform(scrollYProgress, [0, 1], [-30, 30]);

  const rotateX = useSpring(
    useTransform([mouseTiltX, scrollTiltX], ([m, s]) => Number(m) + Number(s)),
    springConfig
  );
  const rotateY = useSpring(mouseTiltY, springConfig);

  // Translation values for the head and face to follow mouse
  const headTranslateX = useSpring(useTransform(mouseX, [-250, 250], [-25, 25]), springConfig);
  const headTranslateY = useSpring(useTransform(mouseY, [-250, 250], [-25, 25]), springConfig);
  
  // Eyes move slightly more for parallax depth
  const eyeTranslateX = useSpring(useTransform(mouseX, [-250, 250], [-8, 8]), springConfig);
  const eyeTranslateY = useSpring(useTransform(mouseY, [-250, 250], [-8, 8]), springConfig);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    mouseX.set(e.clientX - centerX);
    mouseY.set(e.clientY - centerY);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section 
      ref={containerRef}
      className="py-24 px-6 relative flex flex-col items-center justify-center overflow-hidden cursor-default"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-emerald-500/5 to-transparent pointer-events-none" />
      
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-center mb-12 relative z-10"
        >
          <h2 className="text-3xl font-bold">its mee</h2>
        </motion.div>

      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
          perspective: 1000
        }}
        className="relative w-64 h-64 flex items-center justify-center"
      >
        {/* Main Body Glow */}
        <div className="absolute inset-0 bg-emerald-500/20 blur-3xl rounded-full animate-pulse" />
        
        {/* Inner Glass Box */}
        <div className="absolute inset-0 glass rounded-[3rem] border-emerald-500/20 shadow-2xl overflow-hidden">
          <div className="absolute inset-0 bg-linear-to-br from-white/10 to-transparent" />
        </div>

        {/* Floating Elements Around Robot */}
        <motion.div
          style={{ translateZ: 100, x: -100, y: -40 }}
          animate={{ y: [-40, -60, -40] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          className="absolute"
        >
          <div className="p-3 glass rounded-xl border-emerald-500/30">
            <Cpu className="w-6 h-6 text-emerald-500" />
          </div>
        </motion.div>

        <motion.div
          style={{ translateZ: 100, x: 100, y: 40 }}
          animate={{ y: [40, 20, 40] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 1 }}
          className="absolute"
        >
          <div className="p-3 glass rounded-xl border-indigo-500/30">
            <BrainCircuit className="w-6 h-6 text-indigo-500" />
          </div>
        </motion.div>

        {/* Robot Head */}
        <Link href="/about">
          <motion.div 
             style={{ 
               translateZ: 150,
               x: headTranslateX,
               y: headTranslateY
             }}
             className="relative z-10 flex flex-col items-center cursor-pointer"
             whileHover={{ scale: 1.15 }}
             whileTap={{ scale: 0.95 }}
             animate={{
               y: [0, -10, 0],
             }}
             transition={{
               y: { repeat: Infinity, duration: 3, ease: "easeInOut" }
             }}
          >
            <div className="relative">
              {/* Glow effect behind robot */}
              <motion.div
                className="absolute inset-0 bg-emerald-500/30 blur-2xl rounded-full"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.3, 0.6, 0.3]
                }}
                transition={{
                  repeat: Infinity,
                  duration: 2,
                  ease: "easeInOut"
                }}
              />
              
              <motion.div
                animate={{
                  rotate: [0, -5, 5, -3, 3, 0],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 5,
                  ease: "easeInOut"
                }}
              >
                <Bot size={140} className="text-emerald-500 drop-shadow-[0_0_25px_rgba(16,185,129,0.6)]" />
              </motion.div>
            
              {/* Eyes */}
              <motion.div 
                style={{ 
                  x: eyeTranslateX,
                  y: eyeTranslateY
                }}
                className="absolute top-[42%] left-[30%] flex gap-6"
              >
                <motion.div 
                  className="w-4 h-4 bg-white rounded-full shadow-[0_0_15px_#fff]"
                  animate={{ 
                    scaleY: [1, 0.1, 1],
                    opacity: [1, 0.8, 1]
                  }}
                  transition={{ 
                    repeat: Infinity, 
                    duration: 4,
                    times: [0, 0.1, 0.2]
                  }}
                />
                <motion.div 
                  className="w-4 h-4 bg-white rounded-full shadow-[0_0_15px_#fff]"
                  animate={{ 
                    scaleY: [1, 0.1, 1],
                    opacity: [1, 0.8, 1]
                  }}
                  transition={{ 
                    repeat: Infinity, 
                    duration: 4,
                    times: [0, 0.1, 0.2]
                  }}
                />
              </motion.div>
              
              {/* Sparkle particles */}
              <motion.div
                className="absolute -top-2 -right-2 w-3 h-3 bg-emerald-400 rounded-full"
                animate={{
                  scale: [0, 1, 0],
                  opacity: [0, 1, 0],
                  y: [-10, -30],
                  x: [0, 10]
                }}
                transition={{
                  repeat: Infinity,
                  duration: 2,
                  ease: "easeOut"
                }}
              />
              <motion.div
                className="absolute -top-4 left-4 w-2 h-2 bg-cyan-400 rounded-full"
                animate={{
                  scale: [0, 1, 0],
                  opacity: [0, 1, 0],
                  y: [-5, -25],
                  x: [-5, -15]
                }}
                transition={{
                  repeat: Infinity,
                  duration: 2.5,
                  delay: 0.5,
                  ease: "easeOut"
                }}
              />
              <motion.div
                className="absolute top-0 right-8 w-2 h-2 bg-indigo-400 rounded-full"
                animate={{
                  scale: [0, 1, 0],
                  opacity: [0, 1, 0],
                  y: [-8, -28],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 1.8,
                  delay: 1,
                  ease: "easeOut"
                }}
              />
            </div>
            
            {/* Click me hint */}
            <motion.span
              className="text-xs text-emerald-500/70 mt-4 font-medium"
              animate={{
                opacity: [0.5, 1, 0.5]
              }}
              transition={{
                repeat: Infinity,
                duration: 2
              }}
            >
              Click me!
            </motion.span>
          </motion.div>
        </Link>

        {/* Rotating Rings */}
        <motion.div
          style={{ translateZ: -50, rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          className="absolute inset-[-40px] border-2 border-dashed border-emerald-500/10 rounded-full"
        />
        <motion.div
          style={{ translateZ: -30, rotate: 0 }}
          animate={{ rotate: -360 }}
          transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
          className="absolute inset-[-20px] border border-indigo-500/10 rounded-full"
        />
      </motion.div>
    </section>
  );
}

export default function Portfolio() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Scroll Animations
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0.5]);
  
  const floatingY1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const floatingY2 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const rotate3d = useTransform(scrollYProgress, [0, 1], [0, 360]);

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const skills = [
    { name: "HTML5", icon: <Monitor className="w-4 h-4" />, category: "Frontend" },
    { name: "CSS3", icon: <Layers className="w-4 h-4" />, category: "Frontend" },
    { name: "JavaScript", icon: <Code2 className="w-4 h-4" />, category: "Language" },
    { name: "React", icon: <Rocket className="w-4 h-4" />, category: "Framework", level: "50%" },
    { name: "Python", icon: <BrainCircuit className="w-4 h-4" />, category: "Language" },
    { name: "C++", icon: <Terminal className="w-4 h-4" />, category: "Language" },
  ];

  const githubUrl = "https://github.com/Hridesh-Thakur/";
  const linkedinUrl = "https://www.linkedin.com/in/hridesh-thakur-762857167/";
  const emailUrl = "https://mail.google.com/mail/?view=cm&fs=1&to=hrithakur01@gmail.com";

  const projects = [
    {
      title: "Jarvis-AI-main",
      description: "A voice-controlled AI Virtual Assistant inspired by Marvel's J.A.R.V.I.S. It listens to your commands, processes them, and responds just like a smart assistant (similar to GPT-based bots).",
      tags: ["Python", "AI", "ML"],
      link: "https://github.com/Hridesh-Thakur/Jarvis-AI-main",
      image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Solar-Syatem-Explorere",
      description: "An interactive 3D Solar System Explorer that lets you discover planets with beautiful visuals and smooth transitions.",
      tags: ["React", "Three.js", "Tailwind"],
      link: "https://github.com/Hridesh-Thakur/Solar-Syatem-Explorere",
      image: "https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Rabbit-Game",
      description: "A fun and interactive 3D game where a rabbit jumps, collects carrots, and avoids obstacles 🎮. This project is built using HTML, CSS, and JavaScript",
      tags: ["HTML", "CSS", "JavaScript"],
      link: "https://github.com/Hridesh-Thakur/Rabbit-Game",
      image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/fcbcbfc3-7ef4-40c9-ad62-9babcf8cf571/image-1768225398569.png?width=8000&height=8000&resize=contain"
    },
    {
      title: "Drive-Drive",
      description: "Drive & Drive is a fun and challenging level-based car game with 100 unique stages. Your progress is automatically saved, so you can pick up right where you left off!",
      tags: ["Game", "JavaScript", "HTML5"],
      link: "https://github.com/Hridesh-Thakur/Drive-Drive",
      image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/fcbcbfc3-7ef4-40c9-ad62-9babcf8cf571/image-1768225239489.png?width=8000&height=8000&resize=contain"
    },
    {
      title: "Solve-the-Cube",
      description: "🧩 Solve the Cube: An interactive 3D cube puzzle built with HTML, CSS, and JavaScript. No external libraries, just pure web magic!",
      tags: ["3D", "CSS", "JavaScript"],
      link: "https://github.com/Hridesh-Thakur/Solve-the-Cube",
      image: "https://images.unsplash.com/photo-1591991731833-b4807cf7ef94?auto=format&fit=crop&q=80&w=800"
    }
  ];

  return (
    <div className="min-h-screen bg-background relative overflow-hidden selection:bg-emerald-500/30 perspective-1000">
      {/* Code-Inspired Gradient Background */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Main gradient layers */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(16,185,129,0.15),transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_80%_20%,rgba(99,102,241,0.12),transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_30%_at_20%_80%,rgba(236,72,153,0.08),transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_40%_at_90%_70%,rgba(34,211,238,0.1),transparent)]" />
        
        {/* Code-like scanlines effect */}
        <div className="absolute inset-0 opacity-[0.015]" style={{
          backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(16,185,129,0.5) 2px, rgba(16,185,129,0.5) 4px)`
        }} />
        
        {/* Terminal/matrix-style vertical lines */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `repeating-linear-gradient(90deg, transparent, transparent 100px, rgba(99,102,241,0.3) 100px, rgba(99,102,241,0.3) 101px)`
        }} />
        
        {/* Syntax highlighting inspired accent spots */}
        <div className="absolute top-[10%] left-[15%] w-96 h-96 bg-emerald-500/10 rounded-full blur-[120px]" />
        <div className="absolute top-[60%] right-[10%] w-80 h-80 bg-indigo-500/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-[20%] left-[30%] w-72 h-72 bg-cyan-500/8 rounded-full blur-[100px]" />
        <div className="absolute top-[40%] right-[40%] w-64 h-64 bg-amber-500/6 rounded-full blur-[80px]" />
      </div>
      
      {/* Background Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none" />
      
      {/* Floating Shapes - 7 unique shapes with different animations */}
      
      {/* Hexagon - rotating and floating */}
      <motion.div
        animate={{ 
          rotate: [0, 360],
          y: [0, -30, 0]
        }}
        transition={{ 
          rotate: { repeat: Infinity, duration: 25, ease: "linear" },
          y: { repeat: Infinity, duration: 5, ease: "easeInOut" }
        }}
        className="absolute top-[20%] right-[10%] opacity-15 pointer-events-none hidden lg:block"
      >
        <Hexagon className="w-28 h-28 text-violet-400 stroke-[1.5]" />
      </motion.div>

      {/* Square - spinning and scaling */}
      <motion.div
        animate={{ 
          rotate: [0, 90, 180, 270, 360],
          scale: [1, 1.2, 1]
        }}
        transition={{ 
          rotate: { repeat: Infinity, duration: 18, ease: "linear" },
          scale: { repeat: Infinity, duration: 3, ease: "easeInOut" }
        }}
        className="absolute top-[15%] left-[8%] opacity-15 pointer-events-none hidden lg:block"
      >
        <Square className="w-20 h-20 text-rose-400 stroke-[1.5]" />
      </motion.div>

      {/* Triangle - rotating and drifting horizontally */}
      <motion.div
        animate={{ 
          rotate: [0, 360],
          x: [0, 30, 0]
        }}
        transition={{ 
          rotate: { repeat: Infinity, duration: 15, ease: "linear" },
          x: { repeat: Infinity, duration: 5, ease: "easeInOut" }
        }}
        className="absolute top-[45%] left-[5%] opacity-20 pointer-events-none hidden lg:block"
      >
        <Triangle className="w-24 h-24 text-orange-400 stroke-[1.5]" />
      </motion.div>

      {/* Circle - pulsing scale and opacity */}
      <motion.div
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.15, 0.25, 0.15]
        }}
        transition={{ 
          scale: { repeat: Infinity, duration: 4, ease: "easeInOut" },
          opacity: { repeat: Infinity, duration: 4, ease: "easeInOut" }
        }}
        className="absolute top-[60%] right-[15%] opacity-15 pointer-events-none hidden lg:block"
      >
        <Circle className="w-20 h-20 text-sky-400 stroke-[2]" />
      </motion.div>

      {/* Star - spinning with scale pulse */}
      <motion.div
        animate={{ 
          rotate: [0, 360],
          scale: [1, 1.4, 1]
        }}
        transition={{ 
          rotate: { repeat: Infinity, duration: 12, ease: "linear" },
          scale: { repeat: Infinity, duration: 3, ease: "easeInOut" }
        }}
        className="absolute top-[75%] left-[20%] opacity-18 pointer-events-none hidden lg:block"
      >
        <Star className="w-18 h-18 text-amber-500 stroke-[1.5]" />
      </motion.div>

      {/* Box - 3D floating effect */}
      <motion.div
        animate={{ 
          rotate: [-360, 0],
          y: [0, 25, 0],
          x: [0, -15, 0]
        }}
        transition={{ 
          rotate: { repeat: Infinity, duration: 20, ease: "linear" },
          y: { repeat: Infinity, duration: 5, ease: "easeInOut" },
          x: { repeat: Infinity, duration: 6, ease: "easeInOut" }
        }}
        className="absolute top-[35%] right-[5%] opacity-15 pointer-events-none hidden lg:block"
      >
        <Box className="w-22 h-22 text-emerald-400 stroke-[1.5]" />
      </motion.div>

      {/* Second Hexagon - counter-rotating with drift */}
      <motion.div
        animate={{ 
          rotate: [360, 0],
          x: [0, 20, 0],
          y: [0, -20, 0]
        }}
        transition={{ 
          rotate: { repeat: Infinity, duration: 30, ease: "linear" },
          x: { repeat: Infinity, duration: 7, ease: "easeInOut" },
          y: { repeat: Infinity, duration: 5, ease: "easeInOut" }
        }}
        className="absolute top-[85%] right-[25%] opacity-12 pointer-events-none hidden lg:block"
      >
        <Hexagon className="w-24 h-24 text-cyan-400 stroke-[1]" />
      </motion.div>

      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-emerald-500 origin-left z-50"
        style={{ scaleX }}
      />

      {/* Navbar */}
      <nav className="fixed top-0 w-full z-40 glass border-b border-border/40">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <motion.span 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-xl font-bold tracking-tighter flex items-center gap-2"
          >
            <div className="w-8 h-8 rounded-lg bg-emerald-500 flex items-center justify-center text-white">
              H
            </div>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              {"Hridesh Pratap Singh ".split("").map((char, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.4, 
                    delay: 0.1 + index * 0.03,
                    ease: "easeOut"
                  }}
                >
                  {char}
                </motion.span>
              ))}
            </motion.span>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="relative inline-flex items-center"
            >
              {"Thakur".split("").map((char, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.4, 
                    delay: 0.8 + index * 0.03,
                    ease: "easeOut"
                  }}
                >
                  {char}
                </motion.span>
              ))}

            </motion.span>
          </motion.span>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
            {["About", "Skills", "Projects", "Education"].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`}
                className="hover:text-emerald-500 transition-colors"
              >
                {item}
              </a>
            ))}
            <a href={emailUrl}>
              <Button size="sm" className="bg-emerald-600 hover:bg-emerald-700 text-white rounded-full px-6">
                Contact
              </Button>
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-40 pb-20 px-6 overflow-hidden">
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            style={{ opacity: heroOpacity }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-center"
          >
            <Badge variant="outline" className="mb-6 py-1.5 px-6 border-emerald-500/30 text-emerald-600 bg-emerald-50/50 dark:bg-emerald-500/10 text-sm">
              <Sparkles className="w-4 h-4 mr-2" />
              Available for New Opportunities
            </Badge>
            <h1 className="text-6xl md:text-8xl font-extrabold tracking-tight leading-[1.05] mb-8">
              Hridesh Pratap <br />
              <span>Singh Thakur</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl leading-relaxed">
              B.Tech CSE Student specializing in <span className="text-foreground font-semibold">AI & ML</span>. 
              Bridging the gap between intelligent algorithms and modern web experiences.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white rounded-2xl gap-2 h-16 px-10 group text-lg shadow-lg shadow-emerald-500/20">
                  View My Work <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
              <div className="flex items-center gap-4">
                {[
                  { icon: <Github />, label: "GitHub", href: githubUrl },
                  { icon: <Linkedin />, label: "LinkedIn", href: linkedinUrl },
                  { icon: <Mail />, label: "Email", href: emailUrl }
                ].map((social, i) => (
                  <motion.a
                    key={i}
                    whileHover={{ y: -5, scale: 1.05 }}
                    className="w-16 h-16 rounded-2xl glass flex items-center justify-center text-muted-foreground hover:text-emerald-500 hover:border-emerald-500/30 transition-all shadow-sm hover:shadow-emerald-500/10"
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {React.cloneElement(social.icon as React.ReactElement, { size: 28 })}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 bg-zinc-100/50 dark:bg-zinc-950/40">
        <div className="max-w-4xl mx-auto">
          <motion.div {...fadeIn} className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">About Me</h2>
            <div className="w-20 h-1 bg-emerald-500 mx-auto rounded-full" />
          </motion.div>
          <motion.div 
            {...fadeIn}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Hello! I&apos;m <span className="text-foreground font-semibold">Hridesh</span>, a tech enthusiast deeply immersed in the world of Artificial Intelligence and Machine Learning. 
                Currently pursuing my B.Tech in CSE (AI & ML), I am dedicated to mastering the art of creating efficient, data-driven solutions.
              </p>
              <p>
                My journey started with a curiosity for how things work under the hood, leading me to explore everything from core programming in C++ and Python to modern web development with React.
              </p>
              <div className="flex gap-4 items-center p-4 rounded-2xl bg-emerald-500/5 border border-emerald-500/10">
                <BrainCircuit className="w-6 h-6 text-emerald-500 shrink-0" />
                <p className="text-sm italic font-medium">
                  "Driven by innovation, guided by data, and committed to continuous learning."
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Role", value: "Developer" },
                { label: "Focus", value: "AI & ML" },
                { label: "Education", value: "B.Tech Student" },
                { label: "Experience", value: "Growth Phase" }
              ].map((item, i) => (
                <div key={i} className="p-6 glass rounded-2xl text-center">
                  <p className="text-xs uppercase tracking-wider text-emerald-500 font-bold mb-1">{item.label}</p>
                  <p className="font-semibold">{item.value}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Robot AI Experience Section */}
      <RobotAnimation />

      {/* Skills Section */}
      <section id="skills" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeIn} className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Core Skills</h2>
            <p className="text-muted-foreground">The tools and technologies I use to bring ideas to life.</p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Card className="glass border-emerald-500/10 hover:border-emerald-500/30 transition-all group">
                  <CardContent className="p-6 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-500 group-hover:bg-emerald-500 group-hover:text-white transition-all">
                        {skill.icon}
                      </div>
                      <div>
                        <h3 className="font-bold">{skill.name}</h3>
                        <p className="text-xs text-muted-foreground uppercase tracking-widest">{skill.category}</p>
                      </div>
                    </div>
                    {skill.level && (
                      <div className="text-right">
                        <span className="text-sm font-mono text-emerald-500 font-bold">{skill.level}</span>
                        <div className="w-16 h-1 bg-zinc-200 dark:bg-zinc-800 rounded-full mt-1 overflow-hidden">
                           <div className="h-full bg-emerald-500" style={{ width: skill.level }} />
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-24 px-6 bg-zinc-100/50 dark:bg-zinc-950/40">
        <div className="max-w-4xl mx-auto">
          <motion.div {...fadeIn} className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Education</h2>
            <div className="w-20 h-1 bg-emerald-500 mx-auto rounded-full" />
          </motion.div>

          <motion.div {...fadeIn} className="relative pl-8 border-l-2 border-emerald-500/20">
            <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center shadow-[0_0_15px_rgba(16,185,129,0.5)]">
              <GraduationCap className="w-3 h-3 text-white" />
            </div>
            <div className="glass p-8 rounded-3xl border-emerald-500/10">
              <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                <h3 className="text-2xl font-bold">B.Tech in Computer Science Engineering</h3>
                <Badge className="bg-emerald-500/10 text-emerald-500 hover:bg-emerald-500/20 border-none px-4 py-1">
                  Currently Pursuing
                </Badge>
              </div>
              <p className="text-lg font-medium text-emerald-500 mb-1">Lakshmi Narain College of Technology (Bhopal MP)</p>
              <p className="text-md font-medium text-muted-foreground mb-4 italic">Specialization in AI & ML</p>
              <p className="text-muted-foreground leading-relaxed">
                Focused on core computer science principles with an emphasis on Artificial Intelligence, 
                Machine Learning, Data Structures, and Algorithmic Thinking. Actively participating in 
                technical workshops and building foundational projects.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeIn} className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
            <p className="text-muted-foreground">A glimpse into my technical explorations and builds.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group cursor-pointer"
              >
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  <div className="relative aspect-video rounded-2xl bg-zinc-100 dark:bg-zinc-800 mb-6 overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-linear-to-br from-emerald-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <Button variant="secondary" size="sm" className="rounded-full shadow-lg">
                        View Project <ExternalLink className="w-3 h-3 ml-2" />
                      </Button>
                    </div>
                  </div>
                </a>
                <h3 className="text-xl font-bold mb-2 group-hover:text-emerald-500 transition-colors">{project.title}</h3>
                <p className="text-muted-foreground mb-4 line-clamp-2">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, j) => (
                    <span key={j} className="text-[10px] uppercase font-bold tracking-wider px-2 py-1 rounded-md bg-zinc-100 dark:bg-zinc-800 text-muted-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA / Contact Section */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative overflow-hidden bg-zinc-950 rounded-[2.5rem] p-12 text-center text-white"
          >
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(16,185,129,0.15),transparent)]" />
            <h2 className="text-4xl md:text-5xl font-bold mb-6 relative z-10">Let&apos;s Build the Future</h2>
            <p className="text-zinc-400 text-lg mb-4 max-w-xl mx-auto relative z-10">
              I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
            </p>
            <div className="flex flex-wrap justify-center gap-6 relative z-10 mt-8">
              <a href={emailUrl} target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white rounded-full px-8 h-14">
                  Send a Message
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border/40 text-center text-muted-foreground">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-center gap-6 mb-8">
             <a href={githubUrl} target="_blank" rel="noopener noreferrer">
               <Github className="w-5 h-5 hover:text-emerald-500 cursor-pointer" />
             </a>
             <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">
               <Linkedin className="w-5 h-5 hover:text-emerald-500 cursor-pointer" />
             </a>
             <a href={emailUrl}>
               <Mail className="w-5 h-5 hover:text-emerald-500 cursor-pointer" />
             </a>
          </div>
          <p className="text-sm">
            © {new Date().getFullYear()} Hridesh Pratap Singh Thakur. Built with Passion & Caffeine.
          </p>
        </div>
      </footer>
    </div>
  );
}
