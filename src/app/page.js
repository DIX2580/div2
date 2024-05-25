"use client"
import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Episodes from "./components/Episodes";
import AboutSection from "./components/1";
import ProjectsSection from "./components/ProjectsSection";
import Footer from "./components/Footer";
import Previousepisodes from "./components/Previousepisodes";
import Review from "./components/Review"
export default function Home() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.5 });

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const textVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        staggerChildren: 0.8, // Increased stagger time for slower animation
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1, // Increased duration for slower animation
      },
    },
  };

  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <HeroSection />
      <Episodes />
      <main className="min-h-screen">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={textVariants}
        >
          <Previousepisodes />
        </motion.div>
        <Review/>
      </main>
      <Footer />
    </main>
  );
}
