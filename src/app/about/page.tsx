"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  ArrowLeft,
  MapPin,
  GraduationCap,
  Target,
  Rocket,
  Code2,
  User,
  Sparkles,
  Heart,
  Quote,
  Coffee,
  MessageCircle,
  Github,
  Linkedin,
  Mail,
  Hexagon,
  Square,
  Triangle,
  Circle,
  Box,
  Star
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

export default function AboutPage() {
  const scrollVariant = {
    initial: { opacity: 0, y: 50, scale: 0.9, filter: "blur(10px)" },
    whileInView: { 
      opacity: 1, 
      y: 0, 
      scale: 1, 
      filter: "blur(0px)",
    },
    transition: { 
      type: "spring",
      damping: 25,
      stiffness: 100
    }
  };

  const infoSections = [
      {
        icon: <User className="w-6 h-6" />,
        title: "Name",
        content: "Hridesh Pratap Singh Thakur",
        color: "emerald"
      },
      {
        icon: <MapPin className="w-6 h-6" />,
        title: "From",
        content: "Rajgarh (Madhya Pradesh)",
        color: "sky"
      },
      {
        icon: <GraduationCap className="w-6 h-6" />,
        title: "Schooling",
        content: [
          "Nursery to 10th: Swami Vivekanand Public School",
          "11th & 12th: Bhartiya Vidhya Mander High Secondary School"
        ],
        color: "violet"
      },
      {
        icon: <Rocket className="w-6 h-6" />,
        title: "College",
        content: "Lakshmi Narayin College of Technology (B.Tech in CSE - AI & ML)",
        color: "amber"
      },
      {
        icon: <Heart className="w-6 h-6" />,
        title: "Hobbies & Interests",
        content: ["Coding", "Gaming", "Music", "Exploring Tech", "Building Projects"],
        isTags: true,
        color: "pink"
      },
      {
        icon: <Quote className="w-6 h-6" />,
        title: "Favorite Quote",
        content: "\"Code is like humor. When you have to explain it, it's bad.\" – Cory House",
        color: "indigo"
      },
      {
        icon: <Target className="w-6 h-6" />,
        title: "My Goals / What I Wanna Be",
        content: "To become a Full Stack Developer and open my own business",
        color: "rose"
      },
      {
        icon: <Sparkles className="w-6 h-6" />,
        title: "What I'm Doing Now",
        content: "Pursuing College, learning React, and living life with so many funs!",
        color: "cyan"
      },
      {
        icon: <Coffee className="w-6 h-6" />,
        title: "Fun Facts",
        content: [
          "Can debug code faster with coffee ☕",
          "Night owl coder 🦉"
        ],
        color: "orange"
      },
      {
        icon: <Code2 className="w-6 h-6" />,
        title: "Languages I Know",
        content: ["HTML", "CSS", "C++", "JavaScript", "Java", "React"],
        isTags: true,
        color: "emerald"
      },
      {
        icon: <MessageCircle className="w-6 h-6" />,
        title: "Connect With Me",
        content: "social_links",
        isSocialLinks: true,
        color: "sky"
      }
    ];

  const socialLinks = [
    { 
      icon: <Github className="w-6 h-6" />, 
      label: "GitHub", 
      href: "https://github.com/Hridesh-Thakur/",
      color: "hover:bg-zinc-800 hover:text-white"
    },
    { 
      icon: <Linkedin className="w-6 h-6" />, 
      label: "LinkedIn", 
      href: "https://www.linkedin.com/in/hridesh-thakur-762857167/",
      color: "hover:bg-blue-600 hover:text-white"
    },
    { 
      icon: <Mail className="w-6 h-6" />, 
      label: "Gmail", 
      href: "https://mail.google.com/mail/?view=cm&fs=1&to=hrithakur01@gmail.com",
      color: "hover:bg-red-500 hover:text-white"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors: Record<string, { bg: string; text: string; border: string; glow: string }> = {
      emerald: { bg: "bg-emerald-500/10", text: "text-emerald-500", border: "border-emerald-500/20", glow: "shadow-emerald-500/20" },
      sky: { bg: "bg-sky-500/10", text: "text-sky-500", border: "border-sky-500/20", glow: "shadow-sky-500/20" },
      violet: { bg: "bg-violet-500/10", text: "text-violet-500", border: "border-violet-500/20", glow: "shadow-violet-500/20" },
      amber: { bg: "bg-amber-500/10", text: "text-amber-500", border: "border-amber-500/20", glow: "shadow-amber-500/20" },
      rose: { bg: "bg-rose-500/10", text: "text-rose-500", border: "border-rose-500/20", glow: "shadow-rose-500/20" },
      cyan: { bg: "bg-cyan-500/10", text: "text-cyan-500", border: "border-cyan-500/20", glow: "shadow-cyan-500/20" },
      pink: { bg: "bg-pink-500/10", text: "text-pink-500", border: "border-pink-500/20", glow: "shadow-pink-500/20" },
      indigo: { bg: "bg-indigo-500/10", text: "text-indigo-500", border: "border-indigo-500/20", glow: "shadow-indigo-500/20" },
      orange: { bg: "bg-orange-500/10", text: "text-orange-500", border: "border-orange-500/20", glow: "shadow-orange-500/20" }
    };
    return colors[color] || colors.emerald;
  };

  return (
    <div className="min-h-screen bg-background relative overflow-hidden selection:bg-emerald-500/30">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Gradients */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(16,185,129,0.15),transparent)]" 
        />
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.2 }}
          className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_80%_20%,rgba(99,102,241,0.12),transparent)]" 
        />
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.4 }}
          className="absolute inset-0 bg-[radial-gradient(ellipse_50%_30%_at_20%_80%,rgba(236,72,153,0.08),transparent)]" 
        />
        
        {/* Floating Shapes */}
        <motion.div
          animate={{ 
            rotate: [0, 360],
            y: [0, -30, 0]
          }}
          transition={{ 
            rotate: { repeat: Infinity, duration: 25, ease: "linear" },
            y: { repeat: Infinity, duration: 5, ease: "easeInOut" }
          }}
          className="absolute top-[10%] right-[5%] opacity-10"
        >
          <Hexagon className="w-32 h-32 text-emerald-400 stroke-[1]" />
        </motion.div>

        <motion.div
          animate={{ 
            rotate: [360, 0],
            x: [0, 20, 0]
          }}
          transition={{ 
            rotate: { repeat: Infinity, duration: 20, ease: "linear" },
            x: { repeat: Infinity, duration: 4, ease: "easeInOut" }
          }}
          className="absolute bottom-[15%] left-[5%] opacity-10"
        >
          <Triangle className="w-24 h-24 text-indigo-400 stroke-[1]" />
        </motion.div>

        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.05, 0.15, 0.05]
          }}
          transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
          className="absolute top-[40%] left-[10%] opacity-10"
        >
          <Circle className="w-40 h-40 text-rose-400 stroke-[1]" />
        </motion.div>

        <motion.div
          animate={{ 
            rotate: [0, -360],
            y: [0, 40, 0]
          }}
          transition={{ 
            rotate: { repeat: Infinity, duration: 30, ease: "linear" },
            y: { repeat: Infinity, duration: 8, ease: "easeInOut" }
          }}
          className="absolute top-[60%] right-[10%] opacity-10"
        >
          <Box className="w-20 h-20 text-sky-400 stroke-[1]" />
        </motion.div>

        {/* Scanlines effect */}
        <div className="absolute inset-0 opacity-[0.015]" style={{
          backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(16,185,129,0.5) 2px, rgba(16,185,129,0.5) 4px)`
        }} />
      </div>

      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ type: "spring", damping: 20, stiffness: 100 }}
          className="mb-12"
        >
          <Link href="/">
            <Button variant="ghost" className="gap-2 hover:bg-emerald-500/10 hover:text-emerald-500 group">
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Back to Home
            </Button>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
          >
            <Badge variant="outline" className="mb-6 py-1.5 px-6 border-emerald-500/30 text-emerald-600 bg-emerald-50/50 dark:bg-emerald-500/10 text-sm">
              <Sparkles className="w-4 h-4 mr-2 animate-pulse" />
              About Me
            </Badge>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-5xl md:text-7xl font-extrabold tracking-tight mb-4 bg-clip-text text-transparent bg-linear-to-b from-foreground to-foreground/70"
          >
            Know Me Better
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-xl text-muted-foreground max-w-xl mx-auto"
          >
            Here&apos;s everything you need to know about who I am
          </motion.p>
        </motion.div>

        <div className="space-y-6">
          {infoSections.map((section, i) => {
            const colors = getColorClasses(section.color);
            return (
              <motion.div
                key={i}
                variants={scrollVariant}
                initial="initial"
                whileInView="whileInView"
                viewport={{ once: false, amount: 0.2 }}
                whileHover={{ scale: 1.02, y: -2 }}
                className={`glass p-6 rounded-2xl border ${colors.border} transition-all hover:shadow-lg ${colors.glow}`}
              >
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-xl ${colors.bg} flex items-center justify-center ${colors.text} shrink-0`}>
                    {section.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className={`text-sm uppercase tracking-wider font-bold ${colors.text} mb-2`}>
                      {section.title}
                    </h3>
{section.isTags && Array.isArray(section.content) ? (
                        <div className="flex flex-wrap gap-2">
                          {section.content.map((tag, j) => (
                            <Badge 
                              key={j} 
                              className={`${colors.bg} ${colors.text} border-none px-3 py-1 text-sm font-medium`}
                            >
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      ) : section.isSocialLinks ? (
                        <div className="flex flex-wrap gap-4">
                          {socialLinks.map((link, j) => (
                            <motion.a
                              key={j}
                              href={link.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              whileHover={{ scale: 1.1, y: -3 }}
                              whileTap={{ scale: 0.95 }}
                              className={`flex items-center gap-3 px-5 py-3 rounded-xl glass border border-sky-500/20 transition-all duration-300 ${link.color}`}
                            >
                              {link.icon}
                              <span className="font-medium">{link.label}</span>
                            </motion.a>
                          ))}
                        </div>
                      ) : Array.isArray(section.content) ? (
                      <ul className="space-y-2">
                        {section.content.map((item, j) => (
                          <li key={j} className="text-lg text-foreground flex items-center gap-2">
                            <span className={`w-1.5 h-1.5 rounded-full ${colors.bg.replace('/10', '')}`} />
                            {item}
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-lg text-foreground">{section.content}</p>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-16 text-center"
        >
          <Link href="/">
            <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white rounded-2xl gap-2 h-14 px-10">
              Back to Portfolio
              <ArrowLeft className="w-5 h-5" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
